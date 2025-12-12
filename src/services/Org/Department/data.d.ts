export type Department = API.BaseModel & {
  parentId?: string;
  partnerId?: string;
  name: string;
  code: string;
};

export type DepartmentFilter = API.BaseFilter & {
  name?: string;
  code?: string;
};

export type CreateDepartmentCommand = {
  id?: string;
  parentId?: string;
  partnerId?: string;
  name?: string;
  code?: string;
};
export type UpdateDepartmentCommand = {
  id?: string;
  parentId?: string;
  partnerId?: string;
  name?: string;
  code?: string;
};
