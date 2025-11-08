import type {CreateDepartmentCommand, Department, DepartmentFilter, UpdateDepartmentCommand} from './data.d';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiPutPage, apiPut} from "@/services/common";

const department_base_url = `org/departments`;

export async function getDepartments(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: DepartmentFilter,
) {
  return apiPutPage<Department>(department_base_url, params, filter, sorters);
}

export async function getDepartmentById(id: string) {
  return apiGetById<Department>(department_base_url, id);
}

export async function addDepartment(body: CreateDepartmentCommand) {
  return apiPost(department_base_url, body);
}

export async function updateDepartment(body: UpdateDepartmentCommand) {
  return apiPut(department_base_url, body);
}

export async function deleteDepartment(id: string) {
  return apiDelete(department_base_url, id);
}
