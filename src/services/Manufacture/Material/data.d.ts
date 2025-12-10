export type Material = API.BaseModel & {
  code: string;
  name: string;
  comment: string;
  price: number;
  unit: string;
  valueLevelId: string;
  processId: string;
  specGroupId: string;
  specTypeId: string;
  scenarioId: string;
  process: string;
  value: string;
  specGroup: string;
  specType: string;
  scenario: any;
  partnerId: string;
  parentId: string;
  children: []
}


export type MaterialFilter = API.BaseFilter & {
  code: string;
  name: string;
  comment: string;
  price: number;
  unit: string;
  valueLevelId: string;
  processId: string;
  specGroupId: string;
  specTypeId: string;
  scenarioId: string;
  process: string;
  value: string;
  specGroup: string;
  specType: string;
  scenario: any;
  partnerId: string;
  parentId: string;
  children: []
}
