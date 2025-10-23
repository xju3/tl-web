# 1. 目标

- 构建全模块页面, 含列表页(`List.tsx`), 编辑页(`Edit.tsx`), 视图页(`View.tsx`)

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

- 文件: `src/pages/{module_name}/{page_name}/List.tsx`
- 布局: 分为两部分, 上面为查询面板, 下面为数据列表
- 查询面板:
  - 根据 OpenAPI Schema `#/components/schemas/{page_name}Filter` 提供的属性构建查询面板
- 列表页:
  - 表头提供"新增"功能
  - 表格每一行都有: 编辑, 视图, 删除三个按钮
  - 删除前需要用户确认
  - 新增与编辑共用一个页面
  - 点击视图转到视图页
  - 获取列表的URL中 `{curr_page}` 和 `{page_size}` 需要替换为当前页索引与每页记录数
  - 排序
    - 点击表格的表头可实现由服务器端重新排序
    - 支持多字段排序, 也是就`Sorters`为列表
  - Actions这一栏的长度为`180px`

## 4.2 编辑页

- 文件: `src/pages/{module_name}/{page_name}/Edit.tsx`
- 根据 OpenAPI Schema `#/components/schemas/{page_name}Vo` 构建录入页面
- 提供保存与取消两个按钮
- 保存后返回调用者页面, 可能是视图页,也可能是列表页
- 提供返回按钮, 若返回列表页, 需要保持列表页在进入编辑页的查询状态
- 编辑页面在新增时, 需要自动生成业务实例的ID, UUID

## 4.3 视图页:

- 文件: `src/pages/{module_name}/{page_name}/View.tsx`
- 调用单业务对象查询获取数据
- 展示返回值
- 在视图页可以编辑与删除当前业务对象
- 提供返回按钮, 返回后需保持列表页在进入视图页的查询状态

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
