export type Partner = API.BaseModel & {
  code: string;
  name: string;
  attributes: Record<string, any>;
  region?: string;
  address: string;
  contact?: string;
  email?: string;
  phone?: string;
  parentId?: string;
  regionId?: string;
};


export type PartnerFilter = API.BaseFilter & {
  code: string;
  name: string;
  address: string;
  attributes: Record<string, any>;
  region?: string;
  contact?: string;
  email?: string;
  phone?: string;
};


export type PartnerProduct = API.BaseModel & {
  partnerId: string;
  productId: string;
  locationId: string;
  locationName: string;
  productCode: string;
  productName: string;
  startTime: string;
  endTime: string;
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
