// 指令
export type Instruction = {
  id: string;
  action: string;
  polling: string;
  notification: string;
};

// 外设数据类型
export type Peripheral = {
  id: string;
  code: string;
  name: string;
  instructions: Instruction[];
};

// 分页查询参数类型
export type PeripheralPageParams = {
  currPage?: number;
  pageSize?: number;
  // 其他查询参数
  code?: string;
  name?: string;
  // ProTable 自动注入的排序参数
  sorters?: { fieldName: string; direction: number }[];
};

// API 异常响应体结构
export type ErrorBody = {
  code: string;
  message: string;
  i18n?: string;
  extra?: any;
};
