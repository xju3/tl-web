export type Partner = API.BaseModel & {
  code: string;
  name: string;
  address: string;
  attributes: Record<string, any>;
  owner: string;
  role: number;
  parentId: string;
  tenant: boolean;
};

export type PartnerProduct = API.BaseModel & {
  partnerId: string;
  productId: string;
  code: string;
  startTime: string;
  endTime: string;
  locationId: string;
  ddate: string;
};

export type PartnerProductFilter =  API.BaseFilter &{
  partnerId?: string;
  productId?: string;
  code?: string;
  startTime?: string;
  endTime?: string;
  locationId?: string;
  ddate?: string;
};

export type PartnerFilter = API.BaseFilter & {
  code?: string;
  isTenant?: boolean;
  address?: string;
};

