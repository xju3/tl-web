// src/services/common.d.ts
export interface ErrorBody {
  code: string;
  message?: string;
  i18n?: string;
  extra?: any;
}

export type PageParams = {
  currPage?: number;
  pageSize?: number;
  sorter?: Record<string, 'ascend' | 'descend'>;
};
