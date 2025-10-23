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

declare global {
  namespace API {
    type ResponseEntity<T> = {
      body: T;
      statusCode: 'OK' | 'FAILED';
      statusCodeValue: number;
    };

    type Result<T> = {
      code: number;
      msg: string;
      data: T;
    };

    type IPage<T> = {
      records: T[];
      total: number;
      size: number;
      current: number;
    };
  }
}
