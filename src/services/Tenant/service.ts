import { request } from 'umi';
import {
  CreateMaterialCommand,
  MaterialFilter,
  MaterialVo,
  UpdateMaterialCommand,
} from './data';

export async function getMaterial(id: string) {
  const response = await request<API.ResponseEntity<MaterialVo>>(`/materials/${id}`, {
    method: 'GET',
  });
  return response.body;
}

export async function createMaterial(data: CreateMaterialCommand) {
  return request('/materials', {
    method: 'POST',
    data,
  });
}

export async function updateMaterial(data: UpdateMaterialCommand) {
  return request('/materials', {
    method: 'PUT',
    data,
  });
}

export async function deleteMaterial(id: string) {
  return request(`/materials/${id}`, {
    method: 'DELETE',
  });
}

export async function queryMaterials(
  filter: MaterialFilter,
  options?: { [key: string]: any },
) {
  const { currPage = 1, pageSize = 10 } = options || {};
  return request<API.ResponseEntity<API.IPage<MaterialVo>>>(
    `/materials/${currPage}/${pageSize}`,
    {
      method: 'PUT',
      data: filter,
      ...(options || {}),
    },
  );
}
