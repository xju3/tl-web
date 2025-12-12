export type Role = API.BaseModel & {
  name: string;
  code: string;
  description?: string;
  available?: number;
  partnerId?: string
};

export type RoleFilter = API.BaseFilter & {
  name?: string;
  code?: string;
};
export type CreateRoleCommand = {
  id?: string;
  name?: string;
  code?: string;
  description?: string;
  available?: number;
};
export type UpdateRoleCommand = {
  id?: string;
  name?: string;
  code?: string;
  description?: string;
  available?: number;
};
