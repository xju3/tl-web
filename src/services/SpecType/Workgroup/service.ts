import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {Workgroup, WorkgroupFilter} from "@/services/Manufacture/Workgroup/data";

const base_url = `manufacture/workgroups`;

export async function createWorkgroup(data: Workgroup) {
  return apiPost(base_url, data);
}

export async function getWorkgroups(params: ParamsType, sorter: Record<string, SortOrder>, filter: WorkgroupFilter) {
  return apiPutPage<Workgroup>(base_url, params, filter, sorter);
}

export async function getWorkgroupById(id: string) {
  return apiGetById<Workgroup>(base_url, id);
}



export async function deleteWorkgroup(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateWorkgroup(data: Workgroup) {
  return apiPut(base_url, data);
}
