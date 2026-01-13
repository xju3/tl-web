import type {App, AppFilter} from './data.d';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiPost, apiDelete, apiGetById, apiPutPage, apiPut} from "@/services/common";

const role_base_url = `sys/apps`;

export async function getApps(
  params: ParamsType,
  sorters: Record<string, SortOrder>,
  filter: AppFilter,
) {
  return apiPutPage<App>(role_base_url, params, filter, sorters);
}

export async function getAppById(id: string) {
  return apiGetById<App>(role_base_url, id);
}

export async function addApp(body: App) {
  return apiPost(role_base_url, body);
}

export async function updateApp(body: App) {
  return apiPut(role_base_url, body);
}

export async function deleteApp(id: string) {
  return apiDelete(role_base_url, id);
}
