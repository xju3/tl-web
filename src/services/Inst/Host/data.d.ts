import type { SerialPort } from '../SerialPort/data';



// 主机数据类型
export type InstHost = API.BaseModel & {
  code: string;
  name: string;
  ip: string;
  attributes: any | null;
  ports: SerialPort[];
};

// 分页查询参数类型
export type InstHostFilter = API.BaseFilter & { // 其他查询参数
  code?: string;
  name?: string;
  ip?: string;
};
