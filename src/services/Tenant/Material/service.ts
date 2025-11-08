import {
  CreateMaterialCommand,
  MaterialFilter,
  MaterialVo,
  UpdateMaterialCommand,
} from './data';
import {apiPost, apiDelete, apiGetById, apiPutPage, apiPut} from "@/services/common";
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";

const material_base_url = `tenant/materials`;

export async function getMaterial(id: string) {
  return apiGetById<MaterialVo>(material_base_url, id);
}

export async function createMaterial(data: CreateMaterialCommand) {
  return apiPost(material_base_url, data);
}

export async function updateMaterial(data: UpdateMaterialCommand) {
  return apiPut(material_base_url, data);
}

export async function deleteMaterial(id: string) {
  return apiDelete(material_base_url, id);
}

export async function queryMaterials(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: MaterialFilter,
) {
  return apiPutPage<MaterialVo>(material_base_url, params, filter, sorters);
}
