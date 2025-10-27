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
const url = `/api/${{port}}/{page_name_lower}s`;

export async function get{page_name_cap}s(
  params: API.PageParams,
  body: {page_name_cap}Filter,
  options?: {{ [key: string]: any }},
) {{
  return request<API.ResponseEntity<API.IPage<{page_name_cap}Vo>>>(`${{url}}/${{params.currPage}}/${{params.pageSize}}`, {{
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
        """使用现有文件作为模板生成页面文件"""
        page_name_cap = page_name.capitalize()
        page_name_lower = page_name.lower()
        module_name_cap = module_name.capitalize()

        # 定义模板文件和目标文件的映射
        template_map = {
            "list": "src/pages/Device/SerialPort/List/index.tsx",
            "edit": "src/pages/Device/SerialPort/Edit/index.tsx",
            "view": "src/pages/Device/SerialPort/View/index.tsx"
        }

        target_map = {
            "list": f"src/pages/{module_name_cap}/{page_name_cap}/List/index.tsx",
            "edit": f"src/pages/{module_name_cap}/{page_name_cap}/Edit/index.tsx",
            "view": f"src/pages/{module_name_cap}/{page_name_cap}/View/index.tsx"
        }

        generated_files = []

        for key, template_path in template_map.items():
            try:
                with open(os.path.join(self.work_dir, template_path), 'r', encoding='utf-8') as f:
                    content = f.read()

                # 执行替换
                content = content.replace("SerialPort", page_name_cap)
                content = content.replace("serialPort", page_name_lower)
                content = content.replace("Device", module_name_cap)
                # 更多智能替换可以加在这里，例如动态生成 columns

                generated_files.append({
                    "path": target_map[key],
                    "content": content
                })
            except FileNotFoundError:
                logging.error(f"Template file not found: {template_path}")
                continue

        return generated_files

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
                redirect_pattern = re.compile(r"\s*{\s*path:\s*['\"]/['\"],\s*redirect:", re.DOTALL)
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
