import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {Workshop, WorkshopFilter} from "@/services/Manufacture/Workshop/data";

const base_url = `manufacture/workshops`;

export async function createWorkshop(data: Workshop) {
  return apiPost(base_url, data);
}

export async function getWorkshops(params: ParamsType, sorter: Record<string, SortOrder>, filter: WorkshopFilter) {
  return apiPutPage<Workshop>(base_url, params, filter, sorter);
}

export async function getWorkshopById(id: string) {
  return apiGetById<Workshop>(base_url, id);
}

export async function deleteWorkshop(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateWorkshop(data: Workshop) {
  return apiPut(base_url, data);
}
