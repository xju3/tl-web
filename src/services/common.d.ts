// src/services/common.d.ts
export interface ErrorBody {
  code: string;
  message?: string;
  i18n?: string;
  extra?: any;
}