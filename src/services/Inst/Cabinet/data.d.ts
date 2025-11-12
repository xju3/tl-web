// 机柜数据类型
export type InstCabinet = API.BaseModel & {
  code: string;
  name: string;
  ip: string;
  parentId?: string;

  lockerInstructions: any;
  lockerVal: number;

  scaleInstructions: any;
  scaleVal: number;

  lightInstructions: any;
  lightVal: number;

  ledInstructions: any;
  ledVal: any;


  children: InstCabinet[];
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
