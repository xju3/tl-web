export type PartnerVo = {
  id: string;
  code: string;
  name: string;
  address: string;
  attributes: Record<string, any>;
  owner: string;
  role: number;
  parentId: string;
  tenant: boolean;
};

export type PartnerFilter = {
  sorters?: {
    fieldName?: string;
    direction?: number;
  }[];
  code?: string;
  isTenant?: boolean;
  address?: string;
};

export type CreatePartnerCommand = {
  id: string;
  code: string;
  name: string;
  address: string;
  attributes: Record<string, any>;
  owner: string;
  role: number;
  parentId: string;
  tenant: boolean;
};

export type UpdatePartnerCommand = {
  id: string;
  code: string;
  name: string;
  address: string;
  attributes: Record<string, any>;
  owner: string;
  role: number;
  parentId: string;
  tenant: boolean;
};
