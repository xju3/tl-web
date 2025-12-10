
export type Scenario= API.BaseModel & {
  code: string;
  name: string;
  icon: string;
  color: string;
  origin: number;
  sortOrder: number;
  partnerId: string;
  processId: string;
  parentId: string;
}



export type ScenarioFilter = API.BaseFilter & {
  code: string;
  name: string;
  icon: string;
  color: string;
  sortOrder: number;
  partnerId: string;
  processId: string;
  parentId: string;
}
