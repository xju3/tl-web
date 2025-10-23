# 1. 目标

- 构建全模块页面, 含列表页(`List.tsx`), 编辑页(`Edit.tsx`), 视图页(`View.tsx`)

# 2. 参数

- 任务输入参数: `{module_name}`, `{page_name}`
- 任务内参数:
  - `{java_project}` = `/Users/tju/Workspace/Projects/ongoing/TooksLink/codes/java/admin/`
  - `{filter_path}` = `{java_project}/data/mgr/src/main/java/com/aeons/tl/data/mgr/filter`
  - `{result_path}` = `{java_project}/domain/core/src/main/java/com/aeons/tl/domain/core/api`
  - `{curr_page}`, 当前页索引,默认值为0
  - `{page_size}`, 每页记录数, 默认值为10.
  - `{LANGUAGE}`, 语言类型, 中文为: `cn-ZH`, 英文为 `en-US`

# 3. 约定

## 3.1 API

- 列表页分页查询:
  - URL: `/{page_name}s/{curr_page}/{page_size}`
  - 类型: `PUT`
  - Payload: `{filter_path}/{page_name}Filter.java`
  - 返回值:
    - `Current`: 当前页索引
    - `Page`: 每页记录数
    - `Records`: 为列表数据
      - 数据类型: `{result_path}/{page_name}Api.java`文件中的`{page_name}Vo`类
- 单业务对象查询
  - URL: `/{page_name}s/{id}`
  - 类型: `GET`
  - Payload: 无
  - 返回值: `{result_path}/{page_name}Api.java`文件中的`{page_name}Vo`类
- 新增数据的API
  - URL: `/{page_name}s`
  - 类型: `POST`
  - Payload: `{result_path}/{page_name}Api.java`文件中的 `Create{page_name}Command`
  - 返回值: `UUID`
- 更新数据的API
  - URL: `/{page_name}s`
  - 类型: `PUT`
  - Payload: `{result_path}/{page_name}Api.java`文件中的 `/Update{page_name}Command`
  - 返回值: 无
- 删除数据的API
  - URL: `/{page_name}s/{id}`
  - 类型: `DELETE`
  - Payload: 无
  - 返回值: 无

## 3.2 查询条件

- 文件: `{filter_path}/{page_name}Filter.java`
- 需要提取出类成员作为查询面板的查询条件
- 注意`Filter`类有成员作为服务器端排序的依据,支持多字段排序

# 4. 页面约定

## 4.1 列表页

- 文件: `src/pages/{module_name}/{page_name}/List.tsx`
- 布局: 分为两部分, 上面为查询面板, 下面为数据列表
- 查询面板:
  - 根据`{filter_path}/{page_name}Filter.java`提供的属性构建查询面板
- 列表页:
  - 表头提供"新增"功能
  - 表格每一行都有: 编辑, 视图, 删除三个按钮
  - 删除前需要用户确认
  - 新增与编辑共用一个页面
  - 点击视图转到视图页
  - 排序
    - 点击表格的表头可实现由服务器端重新排序
    - 支持多字段排序, 也是就`Sorters`为列表

## 4.2 编辑页

- 文件: `src/pages/{module_name}/{page_name}/Edit.tsx`
- 根据`{result_path}/{page_name}VO`类构建录入页面
- 提供保存与取消两个按钮
- 保存后返回调用者页面, 可能是视图页,也可能是列表页
- 提供返回按钮, 若返回列表页, 需要保持列表页在进入编辑页的查询状态

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

## 6.1 找到Java相关文件与类

- 找到`Filter`文件,确定构建查询面板可用字段
- 找到`Vo`类文件,确认返回数据的数据结构
- 找到`Create{page_name}Command`确认创建业务实体需要提交的内容
- 找到`Update{page_name}Command`确认编辑业务实体需要提交的内容
- 若有文件缺失, 中止任务

## 6.2 准备国际化资源

- 根据找到的数据,确定需要国际化的内容
- 完成中文版与英文版国际文件的构建

## 6.3 构建页面

- 列表页
- 视图页
- 编辑页
