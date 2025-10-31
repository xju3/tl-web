export type User = API.BaseModel & {
  username?: string;
  employeeId?: string;
};
export type UserFilter = API.BaseFilter & {
  username?: string;
  employeeId?: string;
};
export type CreateUserCommand = {
  id?: string;
  username?: string;
  password?: string;
  employeeId?: string;
};
export type UpdateUserCommand = {
  id?: string;
  username?: string;
  password?: string;
  employeeId?: string;
};
export type IPageUserVo = {
  pages?: number;
  records?: User[];
  current?: number;
  total?: number;
  size?: number;
};
