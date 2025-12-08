import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {Process, ProcessFilter} from "@/services/Manufacture/Process/data";

const base_url = `manufacture/processes`;

export async function createProcess(data: Process) {
  return apiPost(base_url, data);
}

export async function getProcessList(params: ParamsType, sorter: Record<string, SortOrder>, filter: ProcessFilter) {
  return apiPutPage<Process>(base_url, params, filter, sorter);
}

export async function getProcessById(id: string) {
  return apiGetById<Process>(base_url, id);
}



export async function deleteProcess(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateProcess(data: Process) {
  return apiPut(base_url, data);
}
