import { request } from '@umijs/max';
import type { SerialPort, SerialPortPageParams } from './data.d';

// 通用API响应结构 (成功时)
type ApiResponse<T> = {
  body: T;
  headers: Record<string, any>;
  statusCode: string;
  statusCodeValue: number;
};

// 1. 获取串口列表 (分页)
export async function getSerialPorts(params: SerialPortPageParams) {
  const { currPage = 1, pageSize = 10, code, name, sorters: sorter } = params;
  const filter: {
    code?: string;
    name?: string;
    sorters: { fieldName: string; direction: number }[];
  } = { code, name, sorters: [] };

  const response = await request<
    ApiResponse<{ records: SerialPort[]; total: number }>
  >(`/serial-ports/${params.currPage}/${params.pageSize}`, {
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

// 2. 获取单个串口详情
export async function getSerialPortById(id: string) {
  const response = await request<ApiResponse<SerialPort>>(
    `/serial-ports/${id}`,
    {
      method: 'GET',
    },
  );
  // 直接返回 body 中的串口对象
  return response.body;
}

// 3. 新增串口 (API 返回 body 为新串口 ID 字符串)
export async function addSerialPort(data: Partial<SerialPort>) {
  return request<ApiResponse<string>>('/serial-ports', {
    method: 'POST',
    data,
  });
}

// 4. 更新串口 (API 返回 body 为 null)
export async function updateSerialPort(data: Partial<SerialPort>) {
  return request<ApiResponse<null>>('/serial-ports', {
    method: 'PUT',
    data,
  });
}

// 5. 删除串口 (API 返回 body 为 null)
export async function deleteSerialPort(id: string) {
  return request<ApiResponse<null>>(`/serial-ports/${id}`, {
    method: 'DELETE',
  });
}
