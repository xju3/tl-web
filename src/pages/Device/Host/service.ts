import { request } from '@umijs/max';
import type { SerialPort } from '../SerialPort/data.d';
import type { Host, HostPageParams, HostSerialPort } from './data.d';

// 通用API响应结构 (成功时)
type ApiResponse<T> = {
  body: T;
  headers: Record<string, any>;
  statusCode: string;
  statusCodeValue: number;
};

// 1. 获取主机列表 (分页)
export async function getHosts(params: HostPageParams) {
  const { currPage = 1, pageSize = 10, code, name } = params;
  const filter = { code, name };

  const response = await request<
    ApiResponse<{ records: Host[]; total: number }>
  >(`/hosts/${currPage}/${pageSize}`, {
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

// 2. 获取单个主机详情
export async function getHostById(id: string) {
  const response = await request<ApiResponse<Host>>(`/hosts/${id}`, {
    method: 'GET',
  });
  // 直接返回 body 中的主机对象
  return response.body;
}

// 3. 新增主机 (API 返回 body 为新主机 ID 字符串)
export async function addHost(data: Partial<Host>) {
  return request<ApiResponse<string>>('/hosts', {
    method: 'POST',
    data,
  });
}

// 4. 更新主机 (API 返回 body 为 null)
export async function updateHost(data: Partial<Host>) {
  return request<ApiResponse<null>>('/hosts', {
    method: 'PUT',
    data,
  });
}

// 5. 删除主机 (API 返回 body 为 null)
export async function deleteHost(id: string) {
  return request<ApiResponse<null>>(`/hosts/${id}`, {
    method: 'DELETE',
  });
}

// 6. Get all serial ports for a specific host (paginated)
export async function getHostPorts(
  hostId: string,
  params: { currPage?: number; pageSize?: number },
) {
  const { currPage = 1, pageSize = 10 } = params;
  const response = await request<
    ApiResponse<{ records: HostSerialPort[]; total: number }>
  >(`/hosts/${hostId}/ports/${currPage}/${pageSize}`, {
    method: 'GET',
  });
  // 直接返回 ProTable 需要的数据结构
  return {
    data: response.body.records || [],
    success: true,
    total: response.body.total || 0,
  };
}

// 7. Add a serial port to a host
export async function addHostPort(hostId: string, serialPortId: string) {
  return request<ApiResponse<null>>(`/hosts/${hostId}/ports/${serialPortId}`, {
    method: 'POST',
  });
}

// 8. Delete a serial port from a host
// Assuming the 'id' here is the unique ID of the host-port association
export async function deleteHostPort(hostId: string, portId: string) {
  return request<ApiResponse<null>>(`/hosts/${hostId}/ports/${portId}`, {
    method: 'DELETE',
  });
}

// 9. Update a host's serial port association
export async function updateHostPort(
  hostId: string,
  portId: string,
  serialPortId: string,
) {
  return request<ApiResponse<null>>(
    `/hosts/${hostId}/ports/${portId}/${serialPortId}`,
    {
      method: 'PUT',
    },
  );
}
