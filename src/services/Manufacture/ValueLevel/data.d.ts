
export type ValueLevel= API.BaseModel & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  specTypeId: string;
  partnerId: string;
}



export type ValueLevelFilter = API.BaseFilter & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  specTypeId: string;
  partnerId: string;
}
