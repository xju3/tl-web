export type Department = API.BaseModel & {
  parentId?: string;
  companyId?: string;
  name?: string;
  code?: string;
};

export type DepartmentFilter = API.BaseFilter & {
  name?: string;
  code?: string;
  companyId?: string;
};

export type CreateDepartmentCommand = {
  id?: string;
  parentId?: string;
  companyId?: string;
  name?: string;
  code?: string;
};
export type UpdateDepartmentCommand = {
  id?: string;
  parentId?: string;
  companyId?: string;
  name?: string;
  code?: string;
};
export type IPageDepartmentVo = {
  pages?: number;
  records?: Department[];
  current?: number;
  total?: number;
  size?: number;
};
