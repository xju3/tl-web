import type {CreateEmployeeCommand, Employee, EmployeeFilter, UpdateEmployeeCommand} from './data.d';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiPutPage, apiPut} from "@/services/common";

const employee_base_url = `org/employees`;

export async function getEmployees(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: EmployeeFilter,
) {
  return apiPutPage<Employee>(employee_base_url, params, filter, sorters);
}

export async function getEmployeeById(id: string) {
  return apiGetById<Employee>(employee_base_url, id);
}

export async function addEmployee(body: CreateEmployeeCommand) {
  return apiPost(employee_base_url, body);
}

export async function updateEmployee(body: UpdateEmployeeCommand) {
  return apiPut(employee_base_url, body);
}

export async function deleteEmployee(id: string) {
  return apiDelete(employee_base_url, id);
}
