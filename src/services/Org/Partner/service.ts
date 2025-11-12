import type {Partner, PartnerFilter,} from './data';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiPutPage, apiPut, apiGetPage} from "@/services/common";
import type {PartnerProduct} from "@/services/Org/Partner/data";

const partner_base_url = "org/partners"
const partner_product_base_url = `${partner_base_url}/products`;

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
  return apiPost(partner_base_url, command);
}

export async function updatePartner(
  command: Partner,
) {
  return apiPut(partner_base_url, command);
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
  const url = `${partner_base_url}/${partnerId}/products`
  return apiGetPage<PartnerProduct>(url, params)
}

export async function  createPartnerProduct(body: PartnerProduct) {
  const url = `${partner_product_base_url}`
  return apiPost(url, body)
}

export async function  updatePartnerProduct(body: PartnerProduct) {
  const url = `${partner_product_base_url}`
  return apiPut(url, body)
}

export async function  getPartnerProductById(id: string) {
  const url = `${partner_product_base_url}`
  return apiGetById(url, id);
}

export async function  deletePartnerProduct(partnerId: string, partnerProductId: string) {
  const url = `${partner_base_url}/${partnerId}/products`
  return apiDelete(url, partnerProductId);
}
