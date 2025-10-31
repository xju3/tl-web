import type {CreateTenantCommand, Tenant, TenantFilter, UpdateTenantCommand} from './data.d';
import {SortOrder} from "antd/es/table/interface";
import {apiCreate, apiDelete, apiGetById, apiPutPage, apiUpdate} from "@/services/common";
import {ParamsType} from "@ant-design/pro-components";

const url = `org/tenants`;

export async function getTenants(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: TenantFilter,
) {
  return apiPutPage<Tenant>(url, params, filter, sorters)
}

export default getTenants

export async function getTenantById(id: string) {
  return apiGetById<Tenant>(url, id);
}

export async function createTenant(body: CreateTenantCommand) {
  return apiCreate(url, body);
}

export async function updateTenant(body: UpdateTenantCommand) {
  return apiUpdate(url, body);
}

export async function deleteTenant(id: string) {
  return apiDelete(url, id);
}
