
export type SpecType= API.BaseModel & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  processId: string;
  partnerId: string;
}



export type SpecTypeFilter = API.BaseFilter & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  processId: string;
  partnerId: string;
}
