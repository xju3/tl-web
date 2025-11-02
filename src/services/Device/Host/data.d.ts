import type { SerialPort } from '../SerialPort/data';

// 主机-串口关联数据类型
export type HostSerialPort = API.BaseModel & {
  portCode: string;
  serialPortId: string;
  hostId: string;
  serialPortCode: string;
  serialPortName: string;
  baudRate: number;
};

// 主机数据类型
export type Host = API.BaseModel & {
  code: string;
  name: string;
  ip: string;
  attributes: any | null;
  ports: SerialPort[];
};

// 分页查询参数类型
export type HostFilter = API.BaseFilter & { // 其他查询参数
  code?: string;
  name?: string;
  ip?: string;
};
