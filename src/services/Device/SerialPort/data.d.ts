// 串口数据类型
export type SerialPort =  API.BaseModel & {
  code: string;
  name: string;
  protocol: string;
  baudRate: number;
  dataBits: number;
  stopBits: number;
  parity: number;
  description: string;
};

// 分页查询参数类型
export type SerialPortFilter = API.BaseFilter & {
  // 其他查询参数
  code?: string;
  name?: string;
  protocol?: string;
  baudRate?: number;
  dataBits?: number;
  stopBits?: number;
  parity?: number;
  // ProTable 自动注入的排序参数
};
