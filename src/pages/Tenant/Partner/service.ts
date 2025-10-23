import { request } from '@umijs/max';
import type {
  CreatePartnerCommand,
  PartnerFilter,
  PartnerVo,
  UpdatePartnerCommand,
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
