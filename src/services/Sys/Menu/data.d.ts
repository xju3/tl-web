
export type Menu = API.BaseModel & {
  parentId?: string;
  name?: string;
  path?: string;
  component?: string;
  icon?: string;
  type?: string;
  appId: string;
  appName: string;
  sortOrder?: number;
  visible?: boolean;
  permission?: string;
};

export type MenuFilter = API.BaseFilter & {
  name?: string;
  type?: string;
};
