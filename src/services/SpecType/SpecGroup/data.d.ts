
export type Process= API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
  parentId: string;
}



export type ProcessFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
