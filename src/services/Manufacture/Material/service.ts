import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {Material, MaterialFilter} from "@/services/Manufacture/Material/data";

const base_url = `manufacture/materials`;

export async function createMaterial(data: Material) {
  return apiPost(base_url, data);
}

export async function getMaterials(params: ParamsType, sorter: Record<string, SortOrder>, filter: MaterialFilter) {
  return apiPutPage<Material>(base_url, params, filter, sorter);
}

export async function getMaterialById(id: string) {
  return apiGetById<Material>(base_url, id);
}

export async function deleteMaterial(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

export async function updateMaterial(data: Material) {
  return apiPut(base_url, data);
}
