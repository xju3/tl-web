export type Material = API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
  parentId: string;
  children: []
}


export type MaterialFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
