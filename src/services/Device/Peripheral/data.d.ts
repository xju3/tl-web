// 指令
export type Instruction = {
  id: string;
  peripheralId: string;
  instruction: string;
  acknowledge: string;
  comment: string;
};

// 外设数据类型
export type Peripheral = API.BaseModel & {
  code: string;
  name: string;
};

// 分页查询参数类型
export type PeripheralFilter = API.BaseFilter & {
  // 其他查询参数
  code?: string;
  name?: string;
};
