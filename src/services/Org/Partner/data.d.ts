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

export type PartnerProductVo = {
  id: string;
  partnerId: string;
  productId: string;
  code: string;
  startTime: string;
  endTime: string;
  locationId: string;
  ddate: string;
};

export type PartnerProductFilter = {
  sorters?: {
    fieldName?: string;
    direction?: number;
  }[];
  partnerId?: string;
  productId?: string;
  code?: string;
  startTime?: string;
  endTime?: string;
  locationId?: string;
  ddate?: string;
};

export type CreatePartnerProductCommand = {
  id: string;
  partnerId: string;
  productId: string;
  code: string;
  startTime: string;
  endTime: string;
  locationId: string;
  ddate: string;
};

export type UpdatePartnerProductCommand = {
  id: string;
  partnerId: string;
  productId: string;
  code: string;
  startTime: string;
  endTime: string;
  locationId: string;
  ddate: string;
};

export type PartnerFilter = API.BaseFilter & {
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
