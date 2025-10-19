// 串口数据类型
export type SerialPort = {
  id: string;
  name: string;
  port: string;
  baudRate: number;
  dataBits: number;
  stopBits: number;
  parity: number;
  description: string;
};

// 分页查询参数类型
export type SerialPortPageParams = {
  currPage: number;
  pageSize: number;
  // 其他查询参数
  code?: string;
  name?: string;
  // ProTable 自动注入的排序参数
  sorters?: { fieldName: string; direction: number }[];
};
