import type {CreateUserCommand, User, UserFilter, UpdateUserCommand} from './data.d';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiCreate, apiDelete, apiGetById, apiPutPage, apiUpdate} from "@/services/common";

const user_base_url = `sys/users`;

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
  return apiCreate(user_base_url, body);
}

export async function updateUser(body: UpdateUserCommand) {
  return apiUpdate(user_base_url, body);
}

export async function deleteUser(id: string) {
  return apiDelete(user_base_url, id);
}
