import type { Instruction, Peripheral, PeripheralFilter } from './data';
import {apiCreate, apiDelete, apiGetById, apiGetList, apiGetPage, apiPutPage, apiUpdate} from "@/services/common";
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";

const peripheral_base_url = `device/peripherals`;

// 1. 获取外设列表 (分页)
export async function getPeripherals(params: ParamsType, sorter: Record<string, SortOrder>, filter: PeripheralFilter) {
  return apiPutPage<Peripheral>(peripheral_base_url, params, filter, sorter);
}

// 2. 获取单个外设详情
export async function getPeripheralById(id: string) {
  return apiGetById<Peripheral>(peripheral_base_url, id);
}

// 3. 新增外设 (API 返回 body 为新外设 ID 字符串)
export async function addPeripheral(data: Peripheral) {
  return apiCreate<Peripheral>(peripheral_base_url, data);
}

// 4. 更新外设 (API 返回 body 为 null)
export async function updatePeripheral(data: Peripheral) {
  return apiUpdate<Peripheral>(peripheral_base_url, data);
}

// 5. 删除外设 (API 返回 body 为 null)
export async function deletePeripheral(id: string) {
  return apiDelete(peripheral_base_url, id);
}

// 6. 获取单个指令
export async function getInstructionById(peripheralId: string, id: string) {
  const url = `${peripheral_base_url}/instructions/${peripheralId}`;
  return apiGetById<Instruction>(url, id);
}

// 7. 获取指令列表
export async function getInstructions(peripheralId: string, params: ParamsType) {
  const url = `${peripheral_base_url}/${peripheralId}/instructions`;
  return apiGetPage<Instruction>(url, params);
}

// 8. 新增指令
export async function addInstruction(
  peripheralId: string,
  data: Instruction,
) {
  const url = `${peripheral_base_url}/${peripheralId}/instructions`;
  return apiCreate<Instruction>(url, data);
}

// 9. 更新指令
export async function updateInstruction(peripheralId: string,
  data: Instruction,
) {
  const url = `${peripheral_base_url}/${peripheralId}instructions`;
  return apiUpdate<Instruction>(url, data);
}

// 10. 删除指令
export async function deleteInstruction(peripheralId: string, id: string) {
  const url = `${peripheral_base_url}/${peripheralId}/instructions/`;
  return apiDelete(url, id);
}
