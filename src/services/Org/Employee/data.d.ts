export type Employee = API.BaseModel & {
  personId?: string;
  code?: string;
  name?: string;
  email?: string;
  mobile?: string;
  gender?: string;
};

export type EmployeeFilter = API.BaseFilter & {
  employeeNumber?: string;
  personId?: string;
};

export type CreateEmployeeCommand = {
  id?: string;
  personId?: string;
  employeeNumber?: string;
};
export type UpdateEmployeeCommand = {
  id?: string;
  personId?: string;
  employeeNumber?: string;
};
export type IPageEmployeeVo = {
  pages?: number;
  records?: Employee[];
  current?: number;
  total?: number;
  size?: number;
};
