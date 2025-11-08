import type {Host, HostFilter, HostSerialPort} from './data';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiGetList, apiGetPage, apiPutPage, apiPut} from "@/services/common";

const host_base_url = `device/hosts`;
// 通用API响应结构 (成功时)
// 1. 获取主机列表 (分页)
export async function getHosts(params: ParamsType, sorter: Record<string, SortOrder>, filter: HostFilter) {
  return apiPutPage<Host>(host_base_url, params, filter, sorter);
}

// 2. 获取单个主机详情
export async function getHostById(id: string) {
  return apiGetById<Host>(host_base_url, id);
}

// 3. 新增主机 (API 返回 body 为新主机 ID 字符串)
export async function addHost(data: Host) {
  return apiPost(host_base_url, data);
}

// 4. 更新主机 (API 返回 body 为 null)
export async function updateHost(data: Host) {
  return apiPut(host_base_url, data);
}

// 5. 删除主机 (API 返回 body 为 null)
export async function deleteHost(id: string) {
  return apiDelete(host_base_url, id);
}

// 6. Get all serial ports for a specific host (paginated)
export async function getHostSerialPorts(
  hostId: string,
  params: ParamsType,
) {
  const url = `${host_base_url}/${hostId}/ports`;
  return apiGetPage<HostSerialPort>(url, params);
}


// 7. Add a serial port to a host
export async function addHostPort(data: HostSerialPort) {
  console.log(data)
  const url = `${host_base_url}/${data.hostId}/ports`;
  return apiPost(url, data);
}

// 8. Delete a serial port from a host
// Assuming the 'id' here is the unique ID of the host-port association
export async function deleteHostPort(hostId: string, portId: string) {
  const url = `${host_base_url}/${hostId}/ports`;
  return apiDelete(url, portId);
}

// 9. Update a host's serial port association
export async function updateHostPort(
  data: HostSerialPort,
) {
  console.log(data)
  const url = `${host_base_url}/${data.hostId}/ports`;
  return apiPut(url, data);
}

export async function getHostPortById( id: string) {
  console.log(id);
  const url = `${host_base_url}/ports`;
  return apiGetById<HostSerialPort>(url, id);
}
