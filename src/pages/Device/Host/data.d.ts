import type { SerialPort } from '../SerialPort/data.d';

// 主机-串口关联数据类型
export type HostSerialPort = SerialPort & {
  hostSerialPortId: string;
  hostId: string;
};

// 主机数据类型
export type Host = {
  id: string;
  code: string;
  name: string;
  ip: string;
  attributes: any | null;
  ports: SerialPort[];
};

// 分页查询参数类型
export type HostPageParams = {
  currPage?: number;
  pageSize?: number;
  // 其他查询参数
  code?: string;
  name?: string;
  ip?: string;
  // ProTable 自动注入的排序参数
  sorter?: string;
};

// API 异常响应体结构
export type ErrorBody = {
  code: string;
  message: string;
  i18n?: string;
  extra?: any;
};
