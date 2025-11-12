export type Role = API.BaseModel & {
  name?: string;
  code?: string;
  description?: string;
  available?: number;
};

export type RoleFilter = API.BaseFilter & {
  name?: string;
  code?: string;
};
export type CreateRoleCommand = {
  id?: string;
  name?: string;
  code?: string;
};
export type UpdateRoleCommand = {
  id?: string;
  name?: string;
  code?: string;
};
export type IPageRoleVo = {
  pages?: number;
  records?: Role[];
  current?: number;
  total?: number;
  size?: number;
};
