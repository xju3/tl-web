import json
import logging
import os
import re
from typing import Dict, List, Any

import requests


class FullModuleGenerator:
  def __init__(self, work_dir: str):
    self.work_dir = work_dir
    self.openapi_spec = None

  def generate(self, module_name: str, page_name: str) -> str:
    """
    生成全模块文件，包括 API 服务、国际化、页面和路由。
    :param module_name: 模块名称 (e.g., "Device")
    :param page_name: 页面名称 (e.g., "Host")
    :return: 一个 JSON 字符串，包含所有要创建或更新的文件操作。
    """
    openapi_url = "http://localhost:8080/v3/api-docs/default-group"

    # 1. 获取 OpenAPI 规范
    self._fetch_openapi_spec(openapi_url)
    if not self.openapi_spec:
      return json.dumps({"status": "error", "message": "Step 1: Failed to fetch or load OpenAPI spec."})

    file_operations = []

    try:
      api_files = self._generate_api_files(module_name, page_name)
      file_operations.extend(api_files)
      logging.info("Step 2: Finished generating API files.")
    except Exception as e:
      logging.error(f"Error in _generate_api_files: {e}", exc_info=True)
      return json.dumps({"status": "error", "message": "Step 2: Failed to generate api files."}, indent=2)

    try:
      i18n_files = self._generate_i18n_files(module_name, page_name)
      file_operations.extend(i18n_files)
      logging.info("Step 3: Finished generating i18n files.")
    except Exception as e:
      logging.error(f"Error in _generate_i18n_files: {e}", exc_info=True)
      return json.dumps({"status": "error", "message": "Step 3: Failed to generate i18n files."}, indent=2)

    try:
      page_files = self._generate_page_files(module_name, page_name)
      file_operations.extend(page_files)
      logging.info("Step 4: Finished generating page files.")
    except Exception as e:
      logging.error(f"Error in _generate_page_files: {e}", exc_info=True)
      return json.dumps({"status": "error", "message": "Step 4: Failed to generate page files."}, indent=2)

    try:
      logging.info("Step 5: Updating routes...")
      route_update = self._update_routes(module_name, page_name)
      if route_update:
        file_operations.append(route_update)
      logging.info("Step 5: Finished updating routes.")
    except Exception as e:
      logging.error(f"Error in _update_routes: {e}", exc_info=True)
      return json.dumps({"status": "error", "message": "Step 5: Failed to  update routers."}, indent=2)

    return json.dumps(file_operations, indent=2)

  def test_fetch(self) -> str:
    """独立的测试方法，用于验证 OpenAPI spec 的获取"""
    openapi_url = "http://localhost:8080/v3/api-docs/default-group"
    self._fetch_openapi_spec(openapi_url)

    if self.openapi_spec:
      schema_count = len(self.openapi_spec.get('components', {}).get('schemas', {}))
      return json.dumps({
        "status": "SUCCESS",
        "source": "url",
        "url": openapi_url,
        "message": f"Successfully fetched and parsed OpenAPI spec. Found {schema_count} schemas."
      }, indent=2)
    else:
      # Fallback logic from generate() method
      local_path = os.path.join(self.work_dir, 'config', 'openapi.json')
      try:
        with open(local_path, 'r', encoding='utf-8') as f:
          self.openapi_spec = json.load(f)
        schema_count = len(self.openapi_spec.get('components', {}).get('schemas', {}))
        return json.dumps({
          "status": "SUCCESS",
          "source": "local_fallback",
          "path": local_path,
          "message": f"Successfully loaded local OpenAPI spec. Found {schema_count} schemas."
        }, indent=2)
      except Exception as e:
        return json.dumps({
          "status": "FAILURE",
          "message": "Failed to fetch from URL and also failed to load from local file.",
          "error": str(e)
        }, indent=2)

  def _fetch_openapi_spec(self, url: str):
    """从 URL 获取 OpenAPI JSON 数据"""
    try:
      response = requests.get(url, timeout=10)
      response.raise_for_status()  # 如果请求失败则抛出 HTTPError
      self.openapi_spec = response.json()
      logging.info(f"Successfully fetched OpenAPI spec from {url}")
    except requests.exceptions.RequestException as e:
      logging.error(f"Failed to fetch OpenAPI spec from {url}: {e}")
      self.openapi_spec = None

  def _get_ts_type(self, prop: dict) -> str:
    """将 OpenAPI 属性类型转换为 TypeScript 类型"""
    if '$ref' in prop:
      return prop['$ref'].split('/')[-1]
    prop_type = prop.get('type')
    if prop_type == 'string':
      return 'string'
    if prop_type == 'integer' or prop_type == 'number':
      return 'number'
    if prop_type == 'boolean':
      return 'boolean'
    if prop_type == 'array':
      items = prop.get('items', {})
      item_type = self._get_ts_type(items)
      return f'{item_type}[]'
    if prop_type == 'object':
      return 'Record<string, any>'
    return 'any'

  def _schema_to_ts_interface(self, schema_name: str, schema_def: dict) -> str:
    """将 OpenAPI Schema 转换为 TypeScript 接口字符串"""
    if not schema_def or 'properties' not in schema_def:
      return f"export type {schema_name} = Record<string, any>;"

    fields = []
    for prop_name, prop_def in schema_def['properties'].items():
      ts_type = self._get_ts_type(prop_def)
      fields.append(f"  {prop_name}?: {ts_type};")

    return f"export type {schema_name} = {{\n" + "\n".join(fields) + "\n}};"

  def _generate_api_files(self, module_name: str, page_name: str) -> List[Dict[str, str]]:
    """生成 service.ts 和 data.d.ts 文件"""
    schemas = self.openapi_spec.get('components', {}).get('schemas', {})

    page_name_lower = page_name.lower()
    page_name_cap = page_name.capitalize()

    # 1. 生成 data.d.ts 内容
    data_ts_content = ""
    schema_names_to_generate = [
      f"{page_name_cap}Vo",
      f"{page_name_cap}Filter",
      f"Create{page_name_cap}Command",
      f"Update{page_name_cap}Command",
      f"IPage{page_name_cap}Vo"
    ]

    # 找到 IPage{page_name}Vo 依赖的 Vo
    ipage_schema = schemas.get(f"IPage{page_name_cap}Vo")
    if ipage_schema and 'properties' in ipage_schema:
      records = ipage_schema['properties'].get('records', {})
      if 'items' in records and '$ref' in records['items']:
        vo_schema_name = records['items']['$ref'].split('/')[-1]
        if vo_schema_name not in schema_names_to_generate:
          schema_names_to_generate.append(vo_schema_name)

    for schema_name in schema_names_to_generate:
      if schema_name in schemas:
        data_ts_content += self._schema_to_ts_interface(schema_name, schemas[schema_name]) + "\n"

    # 2. 生成 service.ts 内容
    service_ts_content = f"""\
import {{ request }} from '@umijs/max';
import type {{ {page_name_cap}Vo, {page_name_cap}Filter, Create{page_name_cap}Command, Update{page_name_cap}Command }} from './data.d';

const port = '';
const url = `{page_name_lower}s`;

export async function get{page_name_cap}s(
  params: API.PageParams,
  body: {page_name_cap}Filter,
  options?: {{ [key: string]: any }},
) {{
  return request<API.ResponseEntity<API.IPage<{page_name_cap}Vo>>>(`${{url}}/${{params.current}}/${{params.pageSize}}`, {{
    method: 'PUT',
    headers: {{
      'Content-Type': 'application/json',
    }},
    data: body,
    ...(options || {{}}),
  }});
}}

export async function get{page_name_cap}ById(id: string, options?: {{ [key: string]: any }}) {{
  return request<API.ResponseEntity<{page_name_cap}Vo>>(`${{url}}/${{id}}`, {{
    method: 'GET',
    ...(options || {{}}),
  }});
}}

export async function add{page_name_cap}(body: Create{page_name_cap}Command, options?: {{ [key: string]: any }}) {{
  return request<API.ResponseEntity<string>>(`${{url}}`, {{
    method: 'POST',
    headers: {{
      'Content-Type': 'application/json',
    }},
    data: body,
    ...(options || {{}}),
  }});
}}

export async function update{page_name_cap}(body: Update{page_name_cap}Command, options?: {{ [key: string]: any }}) {{
  return request<API.ResponseEntity<null>>(`${{url}}`, {{
    method: 'PUT',
    headers: {{
      'Content-Type': 'application/json',
    }},
    data: body,
    ...(options || {{}}),
  }});
}}

export async function delete{page_name_cap}(id: string, options?: {{ [key: string]: any }}) {{
  return request<API.ResponseEntity<null>>(`${{url}}/${{id}}`, {{
    method: 'DELETE',
    ...(options || {{}}),
  }});
}}
"""

    return [
      {
        "path": f"src/services/{module_name}/data.d.ts",
        "content": data_ts_content
      },
      {
        "path": f"src/services/{module_name}/service.ts",
        "content": service_ts_content
      }
    ]

  def _generate_i18n_files(self, module_name: str, page_name: str) -> List[Dict[str, str]]:
    """生成国际化文件"""
    schemas = self.openapi_spec.get('components', {}).get('schemas', {})
    page_name_cap = page_name.capitalize()
    page_name_lower = page_name.lower()
    module_name_lower = module_name.lower()

    keys = set()
    # 从 Vo 和 Filter 中提取字段
    for schema_suffix in [f"{page_name_cap}Vo", f"{page_name_cap}Filter"]:
      schema = schemas.get(schema_suffix, {})
      if 'properties' in schema:
        keys.update(schema['properties'].keys())

    # 生成 en-US 文件内容
    en_us_content = "export default {\n"
    for key in sorted(list(keys)):
      en_us_content += f"  'page.{module_name_lower}.{page_name_lower}.{key}': '{key.capitalize()}',\n"
    en_us_content += "};\n"

    # 生成 zh-CN 文件内容 (暂时使用 key 作为值)
    zh_cn_content = "export default {\n"
    for key in sorted(list(keys)):
      zh_cn_content += f"  'page.{module_name_lower}.{page_name_lower}.{key}': '{key}',\n"
    zh_cn_content += "};\n"

    return [
      {
        "path": f"src/locales/en-US/{module_name_lower}/{page_name_lower}.ts",
        "content": en_us_content
      },
      {
        "path": f"src/locales/zh-CN/{module_name_lower}/{page_name_lower}.ts",
        "content": zh_cn_content
      }
    ]

  def _generate_page_files(self, module_name: str, page_name: str) -> List[Dict[str, str]]:
    """根据 Schema 动态生成所有页面文件"""
    module_name_cap = module_name.capitalize()
    page_name_cap = page_name.capitalize()

    list_page_content = self._generate_list_page(module_name, page_name)
    edit_page_content = self._generate_edit_page(module_name, page_name)
    view_page_content = self._generate_view_page(module_name, page_name)

    return [
      {
        "path": f"src/pages/{module_name_cap}/{page_name_cap}/List/index.tsx",
        "content": list_page_content
      },
      {
        "path": f"src/pages/{module_name_cap}/{page_name_cap}/Edit/index.tsx",
        "content": edit_page_content
      },
      {
        "path": f"src/pages/{module_name_cap}/{page_name_cap}/View/index.tsx",
        "content": view_page_content
      },
    ]

  def _update_routes(self, module_name: str, page_name: str) -> Dict[str, str]:
    """更新路由文件"""
    page_name_cap = page_name.capitalize()
    page_name_lower = page_name.lower()
    module_name_lower = module_name.lower()
    module_name_cap = module_name.capitalize()

    routes_path = os.path.join(self.work_dir, "config/routes.ts")

    try:
      with open(routes_path, 'r', encoding='utf-8') as f:
        content = f.read()

      page_route_str = f"""\
      {{
        name: '{page_name_lower}',
        path: '/{module_name_lower}/{page_name_lower}',
        component: './{module_name_cap}/{page_name_cap}/List',
      }},
      {{
        name: '{page_name_lower}.edit',
        path: '/{module_name_lower}/{page_name_lower}/edit/:id',
        component: './{module_name_cap}/{page_name_cap}/Edit',
        hideInMenu: true,
      }},
      {{
        name: '{page_name_lower}.view',
        path: '/{module_name_lower}/{page_name_lower}/view/:id',
        component: './{module_name_cap}/{page_name_cap}/View',
        hideInMenu: true,
      }},
"""
      # 查找现有的模块路径
      module_pattern = re.compile(r"path:\s*['\"]/" + module_name_lower + r"['\"]", re.DOTALL)
      module_match = module_pattern.search(content)

      if module_match:
        # 模块存在，注入子路由
        # 找到 routes: [
        routes_array_pattern = re.compile(r"routes:\s*\[")
        # 从模块匹配结束的位置开始搜索
        search_area = content[module_match.end():]
        routes_array_match = routes_array_pattern.search(search_area)

        if routes_array_match:
          # 找到匹配的括号
          open_brackets = 1
          # 计算插入位置的绝对索引
          start_pos = module_match.end() + routes_array_match.end()
          insert_pos = -1
          for i in range(start_pos, len(content)):
            if content[i] == '[':
              open_brackets += 1
            elif content[i] == ']':
              open_brackets -= 1
              if open_brackets == 0:
                insert_pos = i
                break
          if insert_pos != -1:
            new_content = content[:insert_pos] + page_route_str + content[insert_pos:]
            return {"path": "config/routes.ts", "content": new_content}
      else:
        # 模块不存在，创建新模块路由
        new_module_route = f"""\
      {{
        path: '/{module_name_lower}',
        name: '{module_name_lower}',
        icon: 'appstore',
        routes: [
          {{
            path: '/{module_name_lower}',
            redirect: '/{module_name_lower}/{page_name_lower}',
          }},
    {page_route_str}
        ],
      }},
    """
        # 插入到 path: '/' 重定向前
        redirect_pattern = re.compile(r"\s*{\s*path:\s*'/',\s*redirect:", re.DOTALL)
        redirect_match = redirect_pattern.search(content)
        if redirect_match:
          insert_pos = redirect_match.start()
          new_content = content[:insert_pos] + new_module_route + content[insert_pos:]
          return {"path": "config/routes.ts", "content": new_content}

      logging.warning(f"Could not find a proper place to insert routes for module: {module_name_lower}")
      return {}

    except FileNotFoundError:
      logging.error(f"Routes file not found: {routes_path}")
      return {}

  def _generate_list_page(self, module_name: str, page_name: str) -> str:
    """根据 Schema 动态生成列表页面的 TSX 代码"""
    module_name_cap = module_name.capitalize()
    module_name_lower = module_name.lower()
    page_name_cap = page_name.capitalize()
    page_name_lower = page_name.lower()

    schemas = self.openapi_spec.get('components', {}).get('schemas', {})
    vo_schema = schemas.get(f"{page_name_cap}Vo", {})
    properties = vo_schema.get('properties', {})

    columns_str = ""
    for prop_name, prop_def in properties.items():
      if prop_name in ['id', 'sorters', 'ports', 'instructions', 'attributes']:
        continue
      columns_str += f"""\
        {{{{
          title: intl.formatMessage({{{{ id: 'page.{module_name_lower}.{page_name_lower}.{prop_name}' }}}}),
          dataIndex: '{prop_name}',
          valueType: 'text',
        }}}},
    """
    return f"""\
    import {{{{ PlusOutlined }}}} from '@ant-design/icons';
    import type {{{{ ActionType, ProColumns }}}} from '@ant-design/pro-components';
    import {{{{ PageContainer, ProTable }}}} from '@ant-design/pro-components';
    import {{{{ FormattedMessage, history, useIntl }}}} from '@umijs/max';
    import {{{{ Button, message, Modal }}}} from 'antd';
    import React, {{{{ useRef }}}} from 'react';
    import type {{{{ {page_name_cap}Vo, {page_name_cap}Filter }}}} from '@/services/{module_name_cap}/data.d';
    import {{{{ get{page_name_cap}s, delete{page_name_cap} }}}} from '@/services/{module_name_cap}/service';

    const {page_name_cap}List: React.FC = () => {{{{
      const actionRef = useRef<ActionType>(undefined);
      const intl = useIntl();

      const handleDelete = async (id: string) => {{{{
        Modal.confirm({{{{
          title: intl.formatMessage({{{{ id: 'common.delete.confirm.title' }}}}),
          content: intl.formatMessage({{{{ id: 'common.delete.confirm.content' }}}}),
          onOk: async () => {{{{
            const res = await delete{page_name_cap}(id);
            if (res.statusCode === 'OK') {{{{
              message.success(intl.formatMessage({{{{ id: 'common.delete.success' }}}}));
              actionRef.current?.reload();
            }}}} else {{{{
              message.error(res.body.message);
            }}}}
          }}}},
        }}}});
      }}}};

      const columns: ProColumns<{page_name_cap}Vo>[] = [
    {columns_str}
        {{{{
          title: <FormattedMessage id="common.columns.action" />,
          dataIndex: 'option',
          valueType: 'option',
          render: (_, record) => [
            <a key="edit" onClick={{{{() => history.push(`/{module_name_lower}/{page_name_lower}/edit/${{{{record.id}}}}`)}}}}>
              <FormattedMessage id="common.edit" />
            </a>,
            <a key="view" onClick={{{{() => history.push(`/{module_name_lower}/{page_name_lower}/view/${{{{record.id}}}}`)}}}}>
              <FormattedMessage id="common.view" />
            </a>,
            <a key="delete" onClick={{{{() => handleDelete(record.id!)}}}}>
              <FormattedMessage id="common.delete" />
            </a>,
          ],
        }}}},
      ];

      return (
        <PageContainer>
          <ProTable<{page_name_cap}Vo>
            headerTitle={{{{intl.formatMessage({{{{ id: 'page.{module_name_lower}.{page_name_lower}.title' }}}})}}}}
            actionRef={{{{actionRef}}}}
            rowKey="id"
            columns={{{{columns}}}}
            search={{{{{{{{ labelWidth: 120 }}}}}}}}
            toolBarRender={{{{() => [
              <Button type="primary" key="primary" onClick={{{{() => history.push('/{module_name_lower}/{page_name_lower}/edit')}}}}>
                <PlusOutlined /> <FormattedMessage id="common.add" />
              </Button>,
            ]}}}}
            request={{{{async (params, sorter, filter) => {{{{
              const sort = sorter && Object.keys(sorter).length ? [{{{{ fieldName: Object.keys(sorter)[0], direction: Object.values(sorter)[0] === 'ascend' ? 0 : 1 }}}}] : [];
              const {{{{ data, success, total }}}} = await get{page_name_cap}s({{{{...params}}}}, {{{{ ...filter, sorters: sort }}}}).then(res => ({{{{
                data: res.body.records,
                total: res.body.total,
                success: res.statusCode === 'OK',
              }}}}));
              return {{{{ data: data || [], success, total }}}};
            }}}}}}}}
          />
        </PageContainer>
      );
    }}}};

    export default {page_name_cap}List;
    """

  def _generate_edit_page(self, module_name: str, page_name: str) -> str:
    """根据 Schema 动态生成编辑页面的 TSX 代码"""
    module_name_cap = module_name.capitalize()
    page_name_cap = page_name.capitalize()

    schemas = self.openapi_spec.get('components', {}).get('schemas', {})
    command_schema = schemas.get(f"Create{page_name_cap}Command", {})
    properties = command_schema.get('properties', {})

    form_fields_str = ""
    for prop_name, prop_def in properties.items():
      if prop_name == 'id':
        continue

      field_type = prop_def.get('type')
      component = "ProFormText"
      if field_type == 'integer' or field_type == 'number':
        component = "ProFormDigit"

      form_fields_str += f"""\
            <{component}
              name="{prop_name}"
              label={{{{intl.formatMessage({{{{ id: 'page.{module_name.lower()}.{page_name.lower()}.{prop_name}' }}}})}}}}
            />
    """
    return f"""\
    import {{{{ PageContainer, ProForm }}}} from '@ant-design/pro-components';
    import {{{{ history, useIntl, useParams }}}} from '@umijs/max';
    import {{{{ Form, message }}}} from 'antd';
    import React, {{{{ useEffect }}}} from 'react';
    import type {{{{ Create{page_name_cap}Command, Update{page_name_cap}Command }}}} from '@/services/{module_name_cap}/data.d';
    import {{{{ add{page_name_cap}, get{page_name_cap}ById, update{page_name_cap} }}}} from '@/services/{module_name_cap}/service';

    const {page_name_cap}Edit: React.FC = () => {{{{
      const {{{{ id }}}} = useParams<{{{{ id: string }}}}>();
      const [form] = Form.useForm();
      const intl = useIntl();

      useEffect(() => {{{{
        if (id) {{{{
          get{page_name_cap}ById(id).then((res) => {{{{
            if (res.statusCode === 'OK') {{{{
              form.setFieldsValue(res.body);
            }}}}
          }}}});
        }}}}
      }}}}, [id, form]);

      const onFinish = async (values: Record<string, any>) => {{{{
        try {{{{
          if (id) {{{{
            await update{page_name_cap}({{{{ ...values, id }}}} as Update{page_name_cap}Command);
            message.success(intl.formatMessage({{{{ id: 'common.update.success' }}}}));
          }}}} else {{{{
            await add{page_name_cap}(values as Create{page_name_cap}Command);
            message.success(intl.formatMessage({{{{ id: 'common.add.success' }}}}));
          }}}}
          history.push("/{module_name_cap}/{page_name_cap}");
        }}}} catch (error) {{{{
          // Error handling is managed by the global request error handler
        }}}}
      }}}};

      return (
        <PageContainer onBack={{{{() => history.push("{module_name_cap}/{page_name_cap}"}}}}>
          <ProForm form={{{{form}}}} onFinish={{{{onFinish}}}} >
    {form_fields_str}
          </ProForm>
        </PageContainer>
      );
    }}}};

    export default {page_name_cap}Edit;
    """

  def _generate_view_page(self, module_name: str, page_name: str) -> str:
    """根据 Schema 动态生成视图页面的 TSX 代码"""
    module_name_cap = module_name.capitalize()
    page_name_cap = page_name.capitalize()

    schemas = self.openapi_spec.get('components', {}).get('schemas', {})
    vo_schema = schemas.get(f"{page_name_cap}Vo", {})
    properties = vo_schema.get('properties', {})

    description_items_str = ""
    for prop_name, prop_def in properties.items():
      if prop_name in ['id', 'sorters', 'ports', 'instructions', 'attributes']:
        continue
      description_items_str += f"""\
            <Descriptions.Item label={{{{intl.formatMessage({{{{ id: 'page.{module_name.lower()}.{page_name.lower()}.{prop_name}' }}}})}}}}>
              {{{{data?.{prop_name}}}}}
            </Descriptions.Item>
    """
    return f"""\
    import {{{{ PageContainer }}}} from '@ant-design/pro-components';
    import {{{{ history, useIntl, useParams }}}} from '@umijs/max';
    import {{{{ Button, Descriptions, message, Modal, Space }}}} from 'antd';
    import React, {{{{ useEffect, useState }}}} from 'react';
    import type {{{{ {page_name_cap}Vo }}}} from '@/services/{module_name_cap}/data.d';
    import {{{{ get{page_name_cap}ById, delete{page_name_cap} }}}} from '@/services/{module_name_cap}/service';

    const {page_name_cap}View: React.FC = () => {{{{
      const {{{{ id }}}} = useParams<{{{{ id: string }}}}>();
      const [data, setData] = useState<{page_name_cap}Vo>();
      const intl = useIntl();

      useEffect(() => {{{{
        if (id) {{{{
          get{page_name_cap}ById(id).then((res) => {{{{
            if (res.statusCode === 'OK') {{{{
              setData(res.body);
            }}}}
          }}}});
        }}}}
      }}}}, [id]);

      const handleDelete = async () => {{{{
        Modal.confirm({{{{
          title: intl.formatMessage({{{{ id: 'common.delete.confirm.title' }}}}),
          content: intl.formatMessage({{{{ id: 'common.delete.confirm.content' }}}}),
          onOk: async () => {{{{
            if (id) {{{{
              const res = await delete{page_name_cap}(id);
              if (res.statusCode === 'OK') {{{{
                message.success(intl.formatMessage({{{{ id: 'common.delete.success' }}}}));
                history.push("/{module_name_cap}/{page_name_cap}");
              }}}} else {{{{
                message.error(res.body.message);
              }}}}
            }}}}
          }}}},
        }}}});
      }}}};

      return (
        <PageContainer
          onBack={{{{() => history.push("/{module_name_cap}/{page_name_cap}")}}}}
          extra={{{{[
            <Button key="edit" type="primary" onClick={{{{() => history.push(`/{module_name.lower()}/{page_name.lower()}/edit/${{{{id}}}}`)}}}}>
              {{{{intl.formatMessage({{{{ id: 'common.edit' }}}})}}}}
            </Button>,
            <Button key="delete" type="dashed" danger onClick={{{{handleDelete}}}}>
              {{{{intl.formatMessage({{{{ id: 'common.delete' }}}})}}}}
            </Button>,
          ]}}}}
        >
          {{{{data && (
            <Descriptions bordered column={{{{1}}}}>
    {description_items_str}
            </Descriptions>
          )}}}}
        </PageContainer>
      );
    }}}};

    export default {page_name_cap}View;
  """
