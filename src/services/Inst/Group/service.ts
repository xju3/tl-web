import {SortOrder} from "antd/es/table/interface";
import {ParamsType} from "@ant-design/pro-components";
import {apiDelete, apiGetById, apiGetPage, apiPost, apiPut, apiPutPage} from "@/services/common";
import PageParams = API.PageParams;
import {InstCabinetGroup, InstCabinetGroupFilter, InstCabinetGroupItem} from "@/services/Inst/Group/data";

const inst_cabinet_group_base_url = `inst/cabinet-groups`;

export async function getInstCabinetGroupItemById(id: string) {

  const url = `${inst_cabinet_group_base_url}/items`
  return apiGetById<InstCabinetGroupItem>(url, id);
}

export async function createInstCabinetGroupItem(data: InstCabinetGroupItem) {
  const url = `${inst_cabinet_group_base_url}/${data.instCabinetGroupId}/items`
  return apiPost(url, data);
}

export async function updateInstCabinetGroupItem(data: InstCabinetGroupItem) {
  const url = `${inst_cabinet_group_base_url}/${data.instCabinetGroupId}/items`
  return apiPut(url, data);
}

export async function getInstCabinetGroupItems(instCabinetGroupId: string, params: ParamsType) {
  const url = `${inst_cabinet_group_base_url}/${instCabinetGroupId}/items`;
  return apiGetPage<InstCabinetGroupItem>(url, params);
}

export async function deleteInstCabinetGroupItem(instCabinetGroupId: string, recordId: string) {
  const url = `${inst_cabinet_group_base_url}/${instCabinetGroupId}/items`
  return apiDelete(url, recordId);
}

// 1. 获取机柜列表 (树形)
export async function getInstCabinetGroups(params: PageParams, sorter: Record<string, SortOrder>, filter: InstCabinetGroupFilter) {
  const url = `${inst_cabinet_group_base_url}`
  return apiPutPage<InstCabinetGroup>(url, params, filter, sorter);
}

export async function getInstCabinetGroupById(id: string) {
  return apiGetById<InstCabinetGroup>(inst_cabinet_group_base_url, id);
}

export async function deleteInstCabinetGroup(id: string) {
  return apiDelete(inst_cabinet_group_base_url, id);
}

export async function createInstCabinetGroup(data: InstCabinetGroup) {
  return apiPost<InstCabinetGroup>(inst_cabinet_group_base_url, data)
}

export async function updateInstCabinetGroup(data: InstCabinetGroup) {
  return apiPut<InstCabinetGroup>(inst_cabinet_group_base_url, data)
}
