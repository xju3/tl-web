
export type Goods= API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
  parentId: string;
}



export type GoodsFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
