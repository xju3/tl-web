import type {
  CreateTenantCommand,
  Tenant,
  TenantFilter,
  TenantProduct,
  TenantProductFilter,
  UpdateTenantCommand
} from './data.d';
import {SortOrder} from "antd/es/table/interface";
import {apiCreate, apiDelete, apiGetById, apiGetPage, apiPutPage, apiUpdate} from "@/services/common";
import {ParamsType} from "@ant-design/pro-components";
import {UUID} from "node:crypto";

const tenant_base_url = `org/tenants`;

export async function getTenants(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: TenantFilter,
) {
  return apiPutPage<Tenant>(tenant_base_url, params, filter, sorters)
}

export async function getTenantProducts(
  tenantId: string,
  params: ParamsType,
) {
  const url = `${tenant_base_url}/${tenantId}/products`
  return apiGetPage<TenantProduct>(url, params)
}

export async function getTenantById(id: string) {
  return apiGetById<Tenant>(tenant_base_url, id);
}

export async function createTenant(body: CreateTenantCommand) {
  return apiCreate(tenant_base_url, body);
}

export async function updateTenant(body: UpdateTenantCommand) {
  return apiUpdate(tenant_base_url, body);
}

export async function deleteTenant(id: string) {
  return apiDelete(tenant_base_url, id);
}

export async function  createTenantProduct(body: TenantProduct) {
  const url = `${tenant_base_url}/products`
  return apiCreate(url, body)
}

export async function  updateTenantProduct(body: TenantProduct) {
  const url = `${tenant_base_url}/products`
  return apiUpdate(url, body)
}

export async function  getTenantProductById(id: string) {
  const url = `${tenant_base_url}/products`
  return apiGetById(url, id);
}

