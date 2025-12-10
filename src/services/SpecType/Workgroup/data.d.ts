
export type Workgroup= API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
  parentId: string;
}



export type WorkgroupFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
