export type Partner = API.BaseModel & {
  code: string;
  name: string;
  address: string;
  attributes: Record<string, any>;
  owner: string;
  role: number;
  parentId: string;
  tenant: boolean;
};


export type PartnerFilter = API.BaseFilter & {
  code?: string;
  isTenant?: boolean;
  address?: string;
};

