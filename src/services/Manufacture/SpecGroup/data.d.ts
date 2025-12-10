
export type SpecGroup= API.BaseModel & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  specTypeId: string;
  partnerId: string;
}



export type SpecGroupFilter = API.BaseFilter & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  specTypeId: string;
  partnerId: string;
}
