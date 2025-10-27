# 1. 目标

- **使用 MCP 工具自动化生成全功能前端模块**
- 涵盖 API 服务层、国际化资源、列表/编辑/视图页面以及路由配置。

# 2. 先决条件

- **MCP 服务器已启动**: 确保 `tools-link-js-agent` MCP 服务器正在运行，并且已加载最新的代码。如果服务器在代码变更后未重启，可能会出现 "Unknown tool" 错误。

# 3. 执行步骤

调用 `tools-link-js-agent` MCP 服务提供的 `generate_full_module` 工具。

## 3.1 工具名称

`generate_full_module`

## 3.2 输入参数

- `module_name` (string, required): 模块的父级名称。例如: `"Device"`
- `page_name` (string, required): 要生成的页面的核心名称。例如: `"Host"`


## 3.3 示例调用

要生成 "Device" 模块下的 "Host" 页面，应使用以下参数调用工具：

- `module_name`: `"Device"`
- `page_name`: `"Host"`

## 4. 预期输出

- 工具将返回一个 JSON 字符串。
- 该字符串是一个包含多个文件操作对象的列表。
- 每个文件操作对象都包含 `path` (要创建或覆盖的文件路径) 和 `content` (该文件的完整内容)。

## 5. 后续步骤

- 审查工具返回的 JSON 输出，确认所有文件路径和内容均符合预期。
- 依次执行文件写入操作，将生成的内容应用到项目中。
