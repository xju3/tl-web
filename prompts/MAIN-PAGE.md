# 1. 目标

- 构建全模块页面, 含列表页(`edit.tsx`), 编辑页(`edit.tsx`), 视图页(`edit.tsx`)

# 2. 参数

- 任务输入参数: `{module_name}`, `{page_name}`
- 任务内参数:
  - `{openapi_url}` = `http://localhost:8080/v3/api-docs/default-group`
  - `{curr_page}`, 当前页索引,默认值为0
  - `{page_size}`, 每页记录数, 默认值为10.
  - `{LANGUAGE}`, 语言类型, 中文为: `cn-ZH`, 英文为 `en-US`

# 3. 约定

## 3.1 API

- 列表页分页查询:
  - URL: `/{page_name}s/{curr_page}/{page_size}`
  - 类型: `PUT`
  - Payload: OpenAPI Schema `#/components/schemas/{page_name}Filter`
  - 返回值: OpenAPI Schema `#/components/schemas/IPage{page_name}Vo`
- 单业务对象查询
  - URL: `/{page_name}s/{id}`
  - 类型: `GET`
  - Payload: 无
  - 返回值: OpenAPI Schema `#/components/schemas/{page_name}Vo`
- 新增数据的API
  - URL: `/{page_name}s`
  - 类型: `POST`
  - Payload: OpenAPI Schema `#/components/schemas/Create{page_name}Command`
  - 返回值: `UUID`
- 更新数据的API
  - URL: `/{page_name}s`
  - 类型: `PUT`
  - Payload: OpenAPI Schema `#/components/schemas/Update{page_name}Command`
  - 返回值: 无
- 删除数据的API
  - URL: `/{page_name}s/{id}`
  - 类型: `DELETE`
  - Payload: 无
  - 返回值: 无

## 3.2 查询条件

- 来源: OpenAPI Schema `#/components/schemas/{page_name}Filter`
- 需要提取出其属性作为查询面板的查询条件
- 注意`Filter`类有成员作为服务器端排序的依据,支持多字段排序

## 3.3 统一响应结构

所有 API 的返回数据都被统一包装在 `ResponseEntity` 实例中，其结构如下：

```json
{
  "body": "T",
  "statusCode": "OK",
  "statusCodeValue": 200
}
```

- **成功响应**:
  - `statusCode` 的值为 `"OK"`。
  - 实际的业务数据位于 `body` 属性中，其类型 `T` 与 OpenAPI 规范中定义的返回类型一致。
  - 在前端代码中，必须从 `response.body` 中获取业务数据。

- **错误响应**:
  - `statusCode` 的值**不**为 `"OK"`。
  - 错误信息通常也包含在 `body` 中，但其结构可能不同。
  - 在前端代码中，应通过判断 `response.statusCode !== 'OK'` 来识别请求是否失败。

# 4. 页面约定

## 4.0 基础布局

- 所有页面（`List`, `Edit`, `View` 等）都必须使用 `@ant-design/pro-components` 中的 `<PageContainer>` 作为根组件。
- `<PageContainer>` 会自动处理页面标题和面包屑导航，确保 UI 的一致性。
- 对于需要返回功能的页面（如 `Edit`, `View`），应使用 `<PageContainer>` 的 `onBack` 属性来实现返回逻辑，例如 `onBack={() => history.back()}`。

## 4.1 列表页

- 文件: `src/pages/{module_name}/{page_name}/Edit/index.tsx`
- 约定:
  - {page_title}, 指页标题, 需要国际化
  - {edit_page}, 编辑页面
  - {api_get_page_data}, 查询数据
  - {router_edit}, 编辑路由
  - {router_view}, 查看路由
  - {api_delete}, 查询数据
  - {field_name}, 字段名
- 表格Columns, columns最后需要一个Actions列, 用于编辑,查看,删除操作 
```ts
const columns: ProColumns<SerialPort>[] = [
{
  title: intl.formatMessage({ id: '{module_name}.{page_name}.{field_name}' }),
  dataIndex: {field_name},
  sorter: true,
},
  {
    title: intl.formatMessage({ id: 'common.actions' }),
    dataIndex: 'option',
    valueType: 'option',
    width: '180px',
    render: (_, record) => [
      <a
        key="edit"
      onClick={() =>
saveStateAndNavigate(`{router_edit}`)
}
>
{intl.formatMessage({ id: 'common.actions.edit' })}
</a>,
<a
key="view"
onClick={() =>
saveStateAndNavigate(`{router_view}`)
}
>
{intl.formatMessage({ id: 'common.actions.view' })}
</a>,
<Popconfirm
key="delete"
title={intl.formatMessage({ id: 'common.delete.confirm' })}
onConfirm={async () => {
  await {api_delete} 
  actionRef.current?.reload();
}}
>
<a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
</Popconfirm>,
],
},
]
```
- 页面代码
```ts
  return (
    <PageContainer>
      <ProTable<PartnerVo, PartnerFilter>
        headerTitle={intl.formatMessage({id: {page_title} })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 40,
        }}
        toolbar={{
          title: <Space> <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('{edit_page}');
            }}
          >
            <PlusOutlined/> <FormattedMessage id="common.actions.add"/>
          </Button>,
          </Space>
        }}
        request={async (params, sort) => {
          const {current, pageSize, ...filter} = params;
          const sorters = Object.entries(sort).map(([key, value]) => ({
            fieldName: key,
            direction: value === 'ascend' ? 1 : 0,
          }));
          const msg = await {api_get_page_data}(
            {...filter, sorters},
            {
              currPage: current,
              pageSize,
            },
          );
          return {
            data: msg.body.records,
            success: msg.statusCode === 'OK',
            total: msg.body.total,
          };
        }}
        columns={columns}
      />
    </PageContainer>
  );
};
```

## 4.2 编辑页

- 文件: `src/pages/{module_name}/{page_name}/edit.tsx`
- 页面示例代码
```ts

const PartnerEdit: React.FC = () => {
  const intl = useIntl();
  const [form] = ProForm.useForm<PartnerVo>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getPartner(id).then((response) => {
        form.setFieldsValue(response);
      });
    } else {
      form.setFieldsValue({ id: uuidv4() });
    }
  }, [id, form]);

  const onFinish = async (
    values: CreatePartnerCommand | UpdatePartnerCommand,
  ) => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.saving' }),
    );
    try {
      if (id) {
        await updatePartner({ ...values, id });
      } else {
        await createPartner(values as CreatePartnerCommand);
      }
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.save.success' }),
      );
      history.back();
    } catch (error) {
      hide();
      message.error(intl.formatMessage({ id: 'pages.searchTable.save.fail' }));
    }
  };

  return (
    <PageContainer onBack={() => history.back()}>
  <ProForm form={form} onFinish={onFinish}>
  <ProFormText name="id" hidden />
  <ProFormText
    name="code"
  label={intl.formatMessage({ id: 'tenant.partner.code' })}
  rules={[{ required: true }]}
  />
  <ProFormText
  name="name"
  label={intl.formatMessage({ id: 'tenant.partner.name' })}
  rules={[{ required: true }]}
  />
  <ProFormText
  name="address"
  label={intl.formatMessage({ id: 'tenant.partner.address' })}
  />
  <ProFormSwitch
  name="tenant"
  label={intl.formatMessage({ id: 'tenant.partner.tenant' })}
  />
  </ProForm>
  </PageContainer>
);
};
```
## 4.3 视图页:

- 文件: `src/pages/{module_name}/{page_name}/edit.tsx`
- 页面示例代码
```ts

return (
  <PageContainer onBack={() => history.back()}>
{data && (
  <Space direction="vertical" size="middle" style={{display: 'flex'}}>
  <Card
    >
    <Descriptions
      bordered
  title={intl.formatMessage({id: 'tenant.partner'})}
  extra={
  <>
  <Space>
    <Button
      type="primary"
  onClick={() => {
  history.push(`/tenant/partner/edit/${id}`);
}}
>
  {intl.formatMessage({id: 'common.actions.edit'})}
  </Button>
  <Popconfirm
  title={intl.formatMessage({id: 'common.delete.confirm'})}
  onConfirm={handleRemove}
    >
    <Button danger>
    {intl.formatMessage({id: 'common.actions.delete'})}
    </Button>
    </Popconfirm>
    </Space>
    </>
}
>
  <Descriptions.Item
    label={intl.formatMessage({id: 'tenant.partner.code'})}
    >
    {data.code}
    </Descriptions.Item>
    <Descriptions.Item
  label={intl.formatMessage({id: 'tenant.partner.name'})}
    >
    {data.name}
    </Descriptions.Item>
    <Descriptions.Item
  label={intl.formatMessage({id: 'tenant.partner.address'})}
    >
    {data.address}
    </Descriptions.Item>
    <Descriptions.Item
  label={intl.formatMessage({id: 'tenant.partner.tenant'})}
  >
  {data.tenant ? 'Yes' : 'No'}
  </Descriptions.Item>
  </Descriptions>
  </Card>
  <Card>
  <Tabs
    activeKey={searchParams.get('tab') || 'peripherals'}
  onChange={(key) => {
  history.push({
    pathname: location.pathname,
    search: `?tab=${key}`,
  });
}}
>
  <Tabs.TabPane
    tab={intl.formatMessage({id: 'tenant.partner.product.list.title'})}
  key="peripherals"
  >
  <ProTable<PartnerProductVo>
    actionRef={actionRef}
  rowKey="id"
  search={false}
  options={{
  density: true,
    fullScreen: true,
    reload: true,
    setting: true,
}}
  toolbar={{
  title: <Button
    type="primary"
  key="primary"
  onClick={() =>
  history.push(`/tenant/partner/${id}/product/add`)
}
>
  <PlusOutlined/>
  {intl.formatMessage({id: 'common.actions.add'})}
  </Button>,
}}
  request={(params) =>
  queryPartnerProducts({...params, partnerId: id})
}
  columns={productColumns}
  />
  </Tabs.TabPane>
  </Tabs>
  </Card>
  </Space>
)}
</PageContainer>
);
};
```

# 5. 国际化

- 只需要提供中文与英文两个版本的国际内容
- 对应的目录在: `src/locales/`目录下
- `src/locales/{LANGUAGE}/common.ts`已经定义了一些共用的国际化key, 优先使用
- 不同的`{page_name}`需要创建相应的国际化文件,

# 6. 执行

## 6.1 获取并解析OpenAPI规范

- 从 `{openapi_url}` 获取 OpenAPI JSON 规范.
- 解析 JSON, 找到以下 Schema 定义:
  - `{page_name}Filter`: 确定构建查询面板可用字段
  - `{page_name}Vo`: 确认返回数据的数据结构
  - `Create{page_name}Command`: 确认创建业务实体需要提交的内容
  - `Update{page_name}Command`: 确认编辑业务实体需要提交的内容
- 若有 Schema 缺失, 中止任务

## 6.2 准备国际化资源

- 根据找到的数据,确定需要国际化的内容
- 完成中文版与英文版国际文件的构建
- 确保新增的国际化资源文件生效

## 6.3 准备API所用到的文件
- service.ts
- data.d.ts

## 6.3 构建页面

- 列表页
- 视图页
- 编辑页

## 6.4 路由与菜单
- 配置路由
- 配置菜单
