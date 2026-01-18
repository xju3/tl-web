
export type PartnerProduct = API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
  parentId: string;
}



export type PartnerProductFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
