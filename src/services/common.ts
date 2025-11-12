// src/services/common.d.ts
import {request} from "@@/exports";
import BaseModel = API.BaseModel;
import {ParamsType} from "@ant-design/pro-components";


export async function apiDelete(url :string, id: string, options?: { [key: string]: any }) {
  return request<API.ResponseEntity<void>>(`/api/${url}/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function apiPut<B>(url: string, body?: B, options?: { [key: string]: any }) {
  return request<API.ResponseEntity<string>>(`/api/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function apiPost<T>(url: string, body: any, options?: { [key: string]: any }) {
  const resp = await request<API.ResponseEntity<T>>(`/api/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
  return resp.body;
}

export async function apiGetById<T>(url: string, id: string, options?: { [key: string]: any }) {
  const resp = await request<API.ResponseEntity<T>>(`/api/${url}/${id}`, {
    method: 'GET',
    ...(options || {}),
  });
  return resp.body;
}

export async function apiGet<T>(url: string) {
  const resp = await request<API.ResponseEntity<T>>(`/api/${url}`, {
    method: 'GET',
  });
  return resp.body;
}

/**
 * 通用的分页查询 PUT 方法
 */
export async function apiPutPage<T extends BaseModel>(
  url: string,
  params: ParamsType,
  filter?: API.BaseFilter | null,
  sorters?: Record<string, 'ascend' | 'descend' | null> | null
) {
// 确保 url 不以 / 开头，避免双斜杠
  if (!filter) {
    filter = {};
  }
  if (sorters && Object.keys(sorters).length > 0) {
    filter.sorters = [];
    for (const [key, value] of Object.entries(sorters)) {
      if (value) {
        const sorter = {"fieldName": key, "direction": value === 'ascend' ? 0 : 1}
        filter.sorters.push(sorter);
      }
    }
  }
  const response = await request<API.ResponseEntity<API.IPage<T>>>(
    `/api/${url}/${params.current}/${params.pageSize}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: filter,
    }
  );

  return {
    data: response.body.records,
    total: response.body.total,
    size: response.body.size,
    current: response.body.current,
  };
}


export async function apiGetPage<T extends BaseModel>(
  url: string,
  params: ParamsType,
) {

  const response = await request<API.ResponseEntity<API.IPage<T>>>(
    `/api/${url}/${params.current}/${params.pageSize}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return {
    data: response.body.records,
    total: response.body.total,
    size: response.body.size,
    current: response.body.current,
  };
}


export async function apiGetList<T>(url :string,  options?: { [key: string]: any }) {
  const resp = await  request<API.ResponseEntity<T[]>>(`/api/${url}`, {
    method: 'GET',
    ...(options || {}),
  });

  return resp.body;
}

export class ErrorBody {
  code?: string;
  message?: string;
  extra?: any;
}
