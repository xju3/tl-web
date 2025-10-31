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
