import { request } from '@umijs/max';
import type { Instruction, Peripheral, PeripheralPageParams } from './data';

// 通用API响应结构 (成功时)
type ApiResponse<T> = {
  body: T;
  headers: Record<string, any>;
  statusCode: string;
  statusCodeValue: number;
};

// 1. 获取外设列表 (分页)
export async function getPeripherals(params: PeripheralPageParams) {
  const { currPage = 0, pageSize = 10, sorter, ...filter } = params as any;

  const payload: {
    sorters?: { fieldName: string; direction: number }[];
    [key: string]: any;
  } = { ...filter };

  if (sorter && Object.keys(sorter).length > 0) {
    payload.sorters = Object.entries(sorter).map(([key, value]) => ({
      fieldName: key,
      direction: value === 'ascend' ? 0 : 1,
    }));
  }

  const response = await request<
    ApiResponse<{ records: Peripheral[]; total: number }>
  >(`/peripherals/${currPage}/${pageSize}`, {
    method: 'PUT',
    data: payload,
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

// 6. 获取单个指令
export async function getInstructionById(peripheralId: string, id: string) {
  const response = await request<ApiResponse<Instruction>>(
    `/peripherals/${peripheralId}/instructions/${id}`,
    {
      method: 'GET',
    },
  );
  return response.body;
}

// 7. 获取指令列表
export async function getInstructions(peripheralId: string) {
  const response = await request<ApiResponse<Instruction[]>>(
    `/peripherals/${peripheralId}/instructions`,
    {
      method: 'GET', // Note: The requirement says PUT, which is unusual for a list query.
    },
  );
  return response.body;
}

// 8. 新增指令
export async function addInstruction(
  peripheralId: string,
  data: Partial<Instruction>,
) {
  return request<ApiResponse<string>>(
    `/peripherals/${peripheralId}/instructions`,
    {
      method: 'POST',
      data,
    },
  );
}

// 9. 更新指令
export async function updateInstruction(
  peripheralId: string,
  id: string,
  data: Partial<Instruction>,
) {
  console.log(data);
  return request<ApiResponse<null>>(
    `/peripherals/${peripheralId}/instructions/${id}`,
    {
      method: 'PUT',
      data,
    },
  );
}

// 10. 删除指令
export async function deleteInstruction(peripheralId: string, id: string) {
  return request<ApiResponse<null>>(
    `/peripherals/${peripheralId}/instructions/${id}`,
    {
      method: 'DELETE',
    },
  );
}
