
export type Menu = API.BaseModel & {
  parentId?: string;
  name?: string;
  path?: string;
  component?: string;
  icon?: string;
  type?: string;
  sortOrder?: number;
  visible?: boolean;
  permission?: string;
};

export type MenuFilter = API.BaseFilter & {
  name?: string;
  type?: string;
};

export type CreateMenuCommand = {
  id?: string;
  parentId?: string;
  name?: string;
  path?: string;
  component?: string;
  icon?: string;
  type?: string;
  sortOrder?: number;
  visible?: boolean;
  permission?: string;
};
export type UpdateMenuCommand = {
  id?: string;
  parentId?: string;
  name?: string;
  path?: string;
  component?: string;
  icon?: string;
  type?: string;
  sortOrder?: number;
  visible?: boolean;
  permission?: string;
};

