
export type InstCabinetGroup = API.BaseModel & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}


export type InstCabinetGroupItem = API.BaseModel & {
  cabinetId: string;
  instCabinetCode: string;
  instCabinetName: string;
  status: number;
  instCabinetGroupId: string;
}



export type InstCabinetGroupFilter = API.BaseFilter & {
  code: string;
  name: string;
  description: string;
  partnerId: string;
}
