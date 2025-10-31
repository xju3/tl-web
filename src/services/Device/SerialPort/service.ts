import type {SerialPort, SerialPortFilter} from './data';
import {ParamsType} from "@ant-design/pro-components";
import {apiCreate, apiDelete, apiGetById, apiPutPage, apiUpdate} from "@/services/common";
import {SortOrder} from "antd/es/table/interface";

const serial_port_base_url = "device/serial-ports"

// 1. 获取串口列表 (分页)
export async function getSerialPorts(params: ParamsType, sorters: Record<string, SortOrder>, filter: SerialPortFilter) {
  return apiPutPage<SerialPort>(serial_port_base_url, params, filter, sorters);
}

// 2. 获取单个串口详情
export async function getSerialPortById(id: string) {
  return apiGetById<SerialPort>(serial_port_base_url, id);
}

// 3. 新增串口 (API 返回 body 为新串口 ID 字符串)
export async function addSerialPort(data: SerialPort) {
  return apiCreate<SerialPort>(serial_port_base_url, data);
}

// 4. 更新串口 (API 返回 body 为 null)
export async function updateSerialPort(data: SerialPort) {
  return apiUpdate<SerialPort>(serial_port_base_url, data);
}

// 5. 删除串口 (API 返回 body 为 null)
export async function deleteSerialPort(id: string) {
  return apiDelete(serial_port_base_url, id);
}
