import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {ValueLevel, ValueLevelFilter} from "@/services/Manufacture/ValueLevel/data";

const base_url = `manufacture/value-levels`;

export async function createValueLevel(data: ValueLevel) {
  return apiPost(base_url, data);
}

export async function getValueLevels(params: ParamsType, sorter?: Record<string, SortOrder>, filter?: ValueLevelFilter) {
  return apiPutPage<ValueLevel>(base_url, params, filter, sorter);
}

export async function getValueLevelById(id: string) {
  return apiGetById<ValueLevel>(base_url, id);
}



export async function deleteValueLevel(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateValueLevel(data: ValueLevel) {
  return apiPut(base_url, data);
}
