import type {InstCabinet, CabinetFilter,} from './data';
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPut, apiPutPage} from "@/services/common";
import PageParams = API.PageParams;

const inst_cabinet_base_url = `inst/cabinets`;
// 通用API响应结构 (成功时)

// 1. 获取机柜列表 (树形)
export async function getInstCabinets(params: PageParams, sorter: Record<string, SortOrder>, filter: CabinetFilter) {
  const url = `${inst_cabinet_base_url}`
  filter.nullParentId = true;
  return apiPutPage<InstCabinet>(url, params, filter, sorter);
}

// 2. 获取单个机柜详情
export async function getInstCabinetById(id: string) {
  return apiGetById<InstCabinet>(inst_cabinet_base_url, id);
}

export async function createInstCabinet(data: InstCabinet) {
  return apiPut<InstCabinet>(inst_cabinet_base_url, data)
}

// 4. 更新机柜 (API 返回 body 为 null)
export async function updateInstCabinet(data: InstCabinet) {
  return apiPut<InstCabinet>(inst_cabinet_base_url, data)
}
