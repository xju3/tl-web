// 指令
export type Instruction = API.BaseModel & {
  peripheralId?: string;
  instruction?: string;
  acknowledge?: string;
  ackBytes?: number;
  comment?: string;
  type?: number;
  status?: number;
};

// 外设数据类型
export type Peripheral = API.BaseModel & {
  code?: string;
  name?: string;
  type?: number;
  precision?: number;
};

// 分页查询参数类型
export type PeripheralFilter = API.BaseFilter & {
  // 其他查询参数
  code?: string;
  name?: string;
  type?: number;
  precision?: number;
};
