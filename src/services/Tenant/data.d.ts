import { QuerySorter } from '@/services/common';

export interface MaterialVo {
  id: string;
  code: string;
  name: string;
  attributes: any;
  weight: number;
  partnerId: string;
}

export interface MaterialFilter {
  sorters?: QuerySorter[];
  code?: string;
  name?: string;
  partnerId?: string;
}

export interface CreateMaterialCommand {
  id: string;
  code: string;
  name: string;
  attributes?: any;
  weight?: number;
  partnerId: string;
}

export interface UpdateMaterialCommand {
  id: string;
  code?: string;
  name?: string;
  attributes?: any;
  weight?: number;
  partnerId?: string;
}
