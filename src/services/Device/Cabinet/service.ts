import type {Cabinet, CabinetCable, CabinetFilter, CabinetPeripheral, CabinetPeripheralUsage,} from './data';
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiGetPage, apiPutPage, apiPut} from "@/services/common";
import {ParamsType} from "@ant-design/pro-components";
import PageParams = API.PageParams;

const cabinet_base_url = `device/cabinets`;
// 通用API响应结构 (成功时)

// 1. 获取机柜列表 (树形)
export async function getCabinets(params: PageParams, sorter: Record<string, SortOrder>, filter: CabinetFilter) {
  const url = `${cabinet_base_url}`
  filter.nullParentId = true;
  return apiPutPage<Cabinet>(url, params, filter, sorter);
}


export async function buildInstructions(cabinetId: string) {
  return apiPut<void>(`${cabinet_base_url}/${cabinetId}`);
}



// 2. 获取单个机柜详情
export async function getCabinetById(id: string) {
  return apiGetById<Cabinet>(cabinet_base_url, id);
}

// 3. 新增机柜 (API 返回 body 为新机柜 ID 字符串)
export async function addCabinet(data: Cabinet) {
  return apiPost<Cabinet>(cabinet_base_url, data)
}

// 4. 更新机柜 (API 返回 body 为 null)
export async function updateCabinet(data: Cabinet) {
  return apiPut<Cabinet>(cabinet_base_url, data)
}

// 5. 删除机柜 (API 返回 body 为 null)
export async function deleteCabinet(id: string) {
  return apiDelete(cabinet_base_url, id);
}

// 6. 获取机柜下的外设列表
export async function getPeripheralsByCabinetId(
  cabinetId: string,
  params: ParamsType,
) {
  const url = `${cabinet_base_url}/${cabinetId}/peripherals`;
  return apiGetPage<CabinetPeripheral>(url, params);
}

// 7. 新增机柜外设绑定
export async function addCabinetPeripheral(data: CabinetPeripheral) {
  const url = `${cabinet_base_url}/peripherals`;
  return apiPost(url, data);
}

// 8. 更新机柜外设绑定
export async function updateCabinetPeripheral(data: CabinetPeripheral) {
  const url = `${cabinet_base_url}/peripherals`;
  return apiPut(url, data);
}

// 9. 获取单个机柜外设绑定详情
export async function getCabinetPeripheralById(id: string) {
  const url = `${cabinet_base_url}/peripherals`;
  return apiGetById<CabinetPeripheral>(url, id);
}

// 10. 删除机柜外设绑定
export async function deleteCabinetPeripheral(cabinetId: string, recordId: string) {
  const url = `${cabinet_base_url}/${cabinetId}/peripherals`;
  return apiDelete(url, recordId);
}

// 11. 获取机柜下的线缆列表
export async function getCabinetCables(cabinetId: string, params: ParamsType ) {
  const url = `${cabinet_base_url}/${cabinetId}/cables`;
  return apiGetPage<CabinetCable>(url, params);
}

// Get single cable by id
export async function getCabinetCableById(id: string) {
  const url = `${cabinet_base_url}/cables`;
  return apiGetById<CabinetCable>(url, id);
}

// 12. 新增机柜线缆
export async function addCabinetCables(data: CabinetCable) {
  const url = `${cabinet_base_url}/cables`;
  return apiPost(url, data);
}

// 13. 更新机柜线缆
export async function updateCabinetCables(data: CabinetCable) {
  const url = `${cabinet_base_url}/cables`;
  return apiPut(url, data);
}

// 14. 删除机柜线缆
export async function deleteCabinetCable(cabinetId: string, recordId: string) {
  const url = `${cabinet_base_url}/${cabinetId}/cables`
  return apiDelete(url, recordId);
}

// 15. Get cabinet peripheral usages
export async function getCabinetPeripheralUsages(cabinetId: string, params: ParamsType) {
  const url = `${cabinet_base_url}/${cabinetId}/usages`;
  return apiGetPage<CabinetPeripheralUsage>(url, params)
}

// 16. Get single cabinet peripheral usage by id
export async function getCabinetPeripheralUsageById(id: string) {
  const url = `${cabinet_base_url}/usages`;
  return apiGetById<CabinetPeripheralUsage>(url, id);
}

// 17. Add cabinet peripheral usage
export async function addCabinetPeripheralUsage(data: CabinetPeripheralUsage) {
  const url = `${cabinet_base_url}/usages`;
  return apiPost(url, data);
}

// 18. Update cabinet peripheral usage
export async function updateCabinetPeripheralUsage(
  data: CabinetPeripheralUsage,
) {
  const url = `${cabinet_base_url}/usages`;
  return apiPut(url, data);
}

// 19. Delete cabinet peripheral usage
export async function deleteCabinetPeripheralUsage(
  cabinetId: string, recordId: string
) {
 const url = `${cabinet_base_url}/${cabinetId}/usages`;
 return apiDelete(url,recordId);
}
