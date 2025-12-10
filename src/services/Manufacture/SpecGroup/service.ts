import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {SpecGroup, SpecGroupFilter} from "@/services/Manufacture/SpecGroup/data";

const base_url = `manufacture/spec-groups`;

export async function createSpecGroup(data: SpecGroup) {
  return apiPost(base_url, data);
}

export async function getSpecGroups(params: ParamsType, sorter?: Record<string, SortOrder>, filter?: SpecGroupFilter) {
  return apiPutPage<SpecGroup>(base_url, params, filter, sorter);
}

export async function getSpecGroupById(id: string) {
  return apiGetById<SpecGroup>(base_url, id);
}



export async function deleteSpecGroup(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateSpecGroup(data: SpecGroup) {
  return apiPut(base_url, data);
}
