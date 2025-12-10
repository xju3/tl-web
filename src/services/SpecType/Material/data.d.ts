

export type Material = API.BaseModel & {
  code: string;
  name: string;
  comment: string;
  price: number;
  unit: string;
  valueLevelId: string;
  processId: string;
  specGroupId: string;
  scenarioId: string;
  process: string;
  value: string;
  spec: string;
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
  scenarioId: string;
  partnerId: string;
  parentId: string;
}
