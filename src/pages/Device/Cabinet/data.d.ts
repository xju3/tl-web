// 机柜数据类型
export type Cabinet = {
  id: string;
  code: string;
  name: string;
  attributes: any | null;
  parentId?: string | null;
  children?: Cabinet[] | null;
};

// 分页查询参数类型
export type CabinetPageParams = {
  currPage?: number;
  pageSize?: number;
  // 其他查询参数
  code?: string;
  name?: string;
  ip?: string;
  nullParentId?: boolean;
  // ProTable 自动注入的排序参数
  sorter?: Record<string, 'ascend' | 'descend' | null>;
};

// API 异常响应体结构
export type ErrorBody = {
  code: string;
  message: string;
  i18n?: string;
  extra?: any;
};
