import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {SpecType, SpecTypeFilter} from "@/services/Manufacture/SpecType/data";

const base_url = `manufacture/spec-types`;

export async function createSpecType(data: SpecType) {
  return apiPost(base_url, data);
}

export async function getSpecTypes(params: ParamsType, sorter?: Record<string, SortOrder>, filter?: SpecTypeFilter) {
  return apiPutPage<SpecType>(base_url, params, filter, sorter);
}

export async function getSpecTypeById(id: string) {
  return apiGetById<SpecType>(base_url, id);
}



export async function deleteSpecType(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateSpecType(data: SpecType) {
  return apiPut(base_url, data);
}
