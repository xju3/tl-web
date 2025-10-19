import { request } from '@umijs/max';
import type { Peripheral, PeripheralPageParams } from './data.d';

// 通用API响应结构 (成功时)
type ApiResponse<T> = {
  body: T;
  headers: Record<string, any>;
  statusCode: string;
  statusCodeValue: number;
};

// 1. 获取外设列表 (分页)
export async function getPeripherals(params: PeripheralPageParams) {
  const { currPage = 1, pageSize = 10, code, name, sorters: sorter } = params;
  var url = `/peripherals/${currPage}/${pageSize}`;
  const filter: {
    code?: string;
    name?: string;
    sorters: { fieldName: string; direction: number }[];
  } = { code, name, sorters: [] };

  const response = await request<
    ApiResponse<{ records: Peripheral[]; total: number }>
  >(url, {
    method: 'PUT',
    data: filter,
  });
  // 直接返回 ProTable 需要的数据结构
  return {
    data: response.body.records || [],
    success: true,
    total: response.body.total || 0,
  };
}

// 2. 获取单个外设详情
export async function getPeripheralById(id: string) {
  const response = await request<ApiResponse<Peripheral>>(
    `/peripherals/${id}`,
    {
      method: 'GET',
    },
  );
  // 直接返回 body 中的外设对象
  return response.body;
}

// 3. 新增外设 (API 返回 body 为新外设 ID 字符串)
export async function addPeripheral(data: Partial<Peripheral>) {
  return request<ApiResponse<string>>('/peripherals', {
    method: 'POST',
    data,
  });
}

// 4. 更新外设 (API 返回 body 为 null)
export async function updatePeripheral(data: Partial<Peripheral>) {
  return request<ApiResponse<null>>('/peripherals', {
    method: 'PUT',
    data,
  });
}

// 5. 删除外设 (API 返回 body 为 null)
export async function deletePeripheral(id: string) {
  return request<ApiResponse<null>>(`/peripherals/${id}`, {
    method: 'DELETE',
  });
}
