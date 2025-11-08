export type User = API.BaseModel & {
  account?: string,
  password?: string,
  status?: number,
  employeeId?: string;
  employeeCode?: string;
  employeeName?: string
};
export type UserRole = API.BaseModel & {
  userId?: string;
  roleId?: string
  userAccount?: string;
  roleCode?: string;
  roleName?: string;
  status?: number;
};


export type LoginInfo = {
  id?: string;
  username?: string;
  password?: string;
  employeeId?: string;
  employeeCode?: string;
  employeeName?: string;
  partnerId?: string;
  departmentId?: string;
  status?: number;
  credentialsNonExpired?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  enabled?: boolean;
  loginType?: string;
  type?: string;
}


export type UserFilter = API.BaseFilter & {
  account?: string,
  status?: number,
  employeeId?: string;
};
export type CreateUserCommand = {
  id?: string;
  password?: string;
  account?: string,
  status?: number,
  employeeId?: string;
};
export type UpdateUserCommand = {
  id?: string;
  account?: string,
  status?: number,
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
