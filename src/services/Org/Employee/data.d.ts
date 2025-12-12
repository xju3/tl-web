export type Employee = API.BaseModel & {
  code?: string;
  givenName?: string;
  familyName?: string;
  fullName: string;
  mobile?: string;
  gender?: number;
  email?: string;
};

export type EmployeeFilter = API.BaseFilter & {
  code?: string;
  givenName?: string;
  familyName?: string;
  fullName?: string;
  mobile?: string;
  gender?: number;
  email?: string;
};

export type CreateEmployeeCommand = {
  id?: string;
  code?: string;
  givenName?: string;
  familyName?: string;
  fullName?: string;
  mobile?: string;
  gender?: number;
};
export type UpdateEmployeeCommand = {
  id?: string;
  code?: string;
  givenName?: string;
  familyName?: string;
  mobile?: string;
  gender?: number;
};
