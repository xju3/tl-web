import type {CreateUserCommand, User, UserFilter, UpdateUserCommand, UserRole, LoginInfo} from './data.d';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiGetPage, apiPutPage, apiPut, apiGet} from "@/services/common";

const user_base_url = `sys/users`;
const user_role_url = `${user_base_url}/roles`

export async function login (payload: API.LoginParams) {
  const url = `sys/auth/login`
  return apiPost<LoginInfo>(url, payload);
}

export async function getUsers(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: UserFilter,
) {
  return apiPutPage<User>(user_base_url, params, filter, sorters);
}

export async function getUserById(id: string) {
  return apiGetById<User>(user_base_url, id);
}

export async function addUser(body: CreateUserCommand) {
  return apiPost(user_base_url, body);
}

export async function updateUser(body: UpdateUserCommand) {
  return apiPut(user_base_url, body);
}

export async function deleteUser(id: string) {
  return apiDelete(user_base_url, id);
}

export async function createUserRole(body: UserRole) {
  return apiPost(user_role_url, body);
}

export async function updateUserRole(body: UserRole) {
  return apiPut(user_role_url, body);
}
export async function getUserRoles(userId: string, params: ParamsType) {
  const url = `${user_base_url}/${userId}/roles`
  return apiGetPage(url, params);
}

export async function getUserRoleById(id: string) {
  const url = `${user_base_url}/roles`
  return apiGetById(url, id)
}

export async function deleteUserRoleById(userId: string, id: string) {
  const url = `${user_base_url}/${userId}/roles`
  return apiDelete(url, id);
}

export async function logout() {
 return  apiGet("/sys/auth/logout")
}
