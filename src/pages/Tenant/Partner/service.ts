import { request } from '@umijs/max';
import type {
  CreatePartnerCommand,
  CreatePartnerProductCommand,
  PartnerFilter,
  PartnerProductFilter,
  PartnerProductVo,
  PartnerVo,
  UpdatePartnerCommand,
  UpdatePartnerProductCommand,
} from './data.d';

export async function queryPartners(
  filter: PartnerFilter,
  options?: { [key: string]: any },
) {
  const { currPage = 1, pageSize = 10 } = options || {};
  return request<API.ResponseEntity<API.IPage<PartnerVo>>>(
    `/partners/${currPage - 1}/${pageSize}`,
    {
      method: 'PUT',
      data: filter,
      ...(options || {}),
    },
  );
}

export async function getPartner(id: string, options?: { [key: string]: any }) {
  const response = await request<API.ResponseEntity<PartnerVo>>(
    `/partners/${id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
  return response.body;
}

export async function createPartner(
  command: CreatePartnerCommand,
  options?: { [key: string]: any },
) {
  return request<string>(`/partners`, {
    method: 'POST',
    data: command,
    ...(options || {}),
  });
}

export async function updatePartner(
  command: UpdatePartnerCommand,
  options?: { [key: string]: any },
) {
  return request<void>(`/partners`, {
    method: 'PUT',
    data: command,
    ...(options || {}),
  });
}

export async function deletePartner(
  id: string,
  options?: { [key: string]: any },
) {
  return request<void>(`/partners/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function queryPartnerProducts(
  filter: PartnerProductFilter,
  options?: { [key: string]: any },
) {
  const { currPage = 1, pageSize = 10 } = options || {};
  const response = await request<
    API.ResponseEntity<API.IPage<PartnerProductVo>>
  >(`/partners/products/${currPage}/${pageSize}`, {
    method: 'PUT',
    data: filter,
    ...(options || {}),
  });
  return {
    data: response.body.records || [],
    success: true,
    total: response.body.total || 0,
  };
}

export async function getPartnerProductById(
  id: string,
  options?: { [key: string]: any },
) {
  const response = await request<API.ResponseEntity<PartnerProductVo>>(
    `/partners/products/${id}`,
    {
      method: 'GET',
      ...(options || {}),
    },
  );
  return response.body;
}

export async function createPartnerProduct(
  command: CreatePartnerProductCommand,
  options?: { [key: string]: any },
) {
  return request<string>(`/partners/products`, {
    method: 'POST',
    data: command,
    ...(options || {}),
  });
}

export async function updatePartnerProduct(
  command: UpdatePartnerProductCommand,
  options?: { [key: string]: any },
) {
  return request<void>(`/partners/products`, {
    method: 'PUT',
    data: command,
    ...(options || {}),
  });
}

export async function deletePartnerProduct(
  partnerId: string,
  id: string,
  options?: { [key: string]: any },
) {
  return request<void>(`/partners/${partnerId}/products/${id}`, {
    method: 'DELETE',
    ...(options || {}),
  });
}
