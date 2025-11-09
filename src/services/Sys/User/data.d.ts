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
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  customUserDetails: {
    id:? string; // user id
    username?: string; // user login account
    password?: string; // encrypted password
    employeeId?: string; // employee id
    employeeCode?: string; // employee code
    employeeName?: string; // employee name
    partnerId?: string;  // partner or company id
    departmentId?: string;
    status?: number; // user status, 0: disabled, 1: available
    credentialsNonExpired?: boolean;
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    enabled?: boolean;
    loginType?: string;
  }
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
