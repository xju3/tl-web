import type {
  Partner,
  PartnerFilter,
  PartnerProduct,
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
  command: Partner,
) {
  return apiCreate(partner_base_url, command);
}

export async function updatePartner(
  command: Partner,
) {
  return apiUpdate(partner_base_url, command);
}

export async function deletePartner(
  id: string,
) {
  return apiDelete(partner_base_url, id);
}

export async function getPartnerProducts(
  partnerId: string,
  params: ParamsType,
) {
  const url = `${partner_base_url}/${partnerId}/products`;
  return apiGetPage<PartnerProduct>(url, params);
}

export async function getPartnerProductById(
  id: string,
) {
  return apiGetById<PartnerProduct>(product_base_url, id);
}

export async function createPartnerProduct(
  command:PartnerProduct,
) {
  return apiCreate(product_base_url, command);
}

export async function updatePartnerProduct(
  command:PartnerProduct,
) {
  return apiUpdate(product_base_url, command);
}

export async function deletePartnerProduct(partnerId: string,
  id: string,
) {
  const url = `${partner_base_url}/${partnerId}`;
  return apiDelete(url, id);
}
