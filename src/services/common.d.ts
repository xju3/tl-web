// src/services/common.d.ts
export interface ErrorBody {
  code: string;
  message: string;
  extra?: Record<string, any>;
}
