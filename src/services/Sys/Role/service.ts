import type {CreateRoleCommand, Role, RoleFilter, UpdateRoleCommand} from './data.d';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiCreate, apiDelete, apiGetById, apiPutPage, apiUpdate} from "@/services/common";

const role_base_url = `sys/roles`;

export async function getRoles(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: RoleFilter,
) {
  return apiPutPage<Role>(role_base_url, params, filter, sorters);
}

export async function getRoleById(id: string) {
  return apiGetById<Role>(role_base_url, id);
}

export async function addRole(body: CreateRoleCommand) {
  return apiCreate(role_base_url, body);
}

export async function updateRole(body: UpdateRoleCommand) {
  return apiUpdate(role_base_url, body);
}

export async function deleteRole(id: string) {
  return apiDelete(role_base_url, id);
}
