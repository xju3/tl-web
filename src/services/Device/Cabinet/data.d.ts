// 机柜数据类型
export type Cabinet = API.BaseModel & {
  id: string;
  code: string;
  name: string;
  ip: string;
  parentId?: string;
  children: Cabinet[];
};

// 机柜外设绑定关系
export type CabinetPeripheral = API.BaseModel & {
  cabinetId: string;
  peripheralId: string;
  code: string;
  name: string;
  quantity: number;
  cableId?: string;
  cableCode?: string;
  cableName?: string;
};

// 分页查询参数类型
export type CabinetFilter = API.BaseFilter & {
  // 其他查询参数
  code?: string;
  name?: string;
  ip?: string;
  nullParentId?: boolean;
  // ProTable 自动注入的排序参数
};




export type CabinetCable = API.BaseModel & {
  cabinetId: string;
  code: string;
  name: string;
  description: string;
  hostId?: string;
  hostCode?: string;
  hostName?: string;
  //host port
  hostPortId?: string;
  hostPortCode?: string;
};

export type CabinetPeripheralUsage = API.BaseModel & {
  cabinetId: string;
  cabinetPeripheralId: string;
  peripheralId?: string;
  peripheralCode: string;
  peripheralName: string;
  sequence: number;
};
