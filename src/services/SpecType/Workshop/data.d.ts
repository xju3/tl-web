
export type Workshop= API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
  parentId: string;
}



export type WorkshopFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
