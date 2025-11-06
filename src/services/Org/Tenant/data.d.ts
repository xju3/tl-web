export type Tenant = API.BaseModel & {
  name?: string;
  code?: string;
};
export type TenantFilter = API.BaseFilter & {
  name?: string;
  code?: string;
};


export type CreateTenantCommand = {
  id?: string;
  name?: string;
  code?: string;
};
export type UpdateTenantCommand = {
  id?: string;
  name?: string;
  code?: string;
};



export type TenantProduct = API.BaseModel & {
  partnerId: string;
  productId: string;
  code: string;
  startTime: string;
  endTime: string;
  locationId: string;
  location: string;
  ddate: string;
};

export type TenantProductFilter =  API.BaseFilter &{
  partnerId?: string;
  productId?: string;
  code?: string;
  startTime?: string;
  endTime?: string;
  locationId?: string;
  ddate?: string;
};
