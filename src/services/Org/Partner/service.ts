import type {
  CreatePartnerCommand,
  CreatePartnerProductCommand,
  Partner,
  PartnerFilter,
  PartnerProductFilter,
  PartnerProductVo,
  UpdatePartnerCommand,
  UpdatePartnerProductCommand,
} from './data';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiCreate, apiDelete, apiGetById, apiGetList, apiGetPage, apiPutPage, apiUpdate} from "@/services/common";

const partner_base_url = "org/partners"
const product_base_url = `${partner_base_url}/products`;

export async function getPartners(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: PartnerFilter,
) {
  return apiPutPage<Partner>(partner_base_url, params, filter, sorters);
}

export async function getPartner(id: string) {
  return apiGetById<Partner>(partner_base_url, id);
}

export async function createPartner(
  command: CreatePartnerCommand,
) {
  return apiCreate(partner_base_url, command);
}

export async function updatePartner(
  command: UpdatePartnerCommand,
) {
  return apiUpdate(partner_base_url, command);
}

export async function deletePartner(
  id: string,
) {
  return apiDelete(partner_base_url, id);
}

export async function getTenantProducts(
  params: ParamsType,
) {
  return apiGetPage<PartnerProductVo>(product_base_url, params);
}

export async function getPartnerProductById(
  id: string,
) {
  return apiGetById<PartnerProductVo>(product_base_url, id);
}

export async function createPartnerProduct(
  command: CreatePartnerProductCommand,
) {
  return apiCreate(product_base_url, command);
}

export async function updatePartnerProduct(
  command: UpdatePartnerProductCommand,
) {
  return apiUpdate(product_base_url, command);
}

export async function deletePartnerProduct(partnerId: string,
  id: string,
) {
  const url = `${partner_base_url}/${partnerId}`;
  return apiDelete(url, id);
}
