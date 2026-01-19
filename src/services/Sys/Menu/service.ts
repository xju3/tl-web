import type {MenuFilter, Menu} from './data.d';
import {apiPost, apiDelete, apiGetById, apiPutPage, apiPut, apiGet} from "@/services/common";
import {ParamsType} from "@ant-design/pro-components";

const menu_base_url = `sys/menus`;

export async function getMenus(
  params: ParamsType,
  filter: MenuFilter,
  sorter?: Record<string, 'ascend' | 'descend' | null>
) {
  return apiPutPage<Menu>(menu_base_url, params, filter, sorter);
}

export async function getMenuById(id: string) {
  return apiGetById<Menu>(menu_base_url, id);
}

export async function getManagementMenus() {
  return apiGet<Menu[]>(`${menu_base_url}/management`, );
}

export async function addMenu(body: Menu, options?: { [key: string]: any }) {
  return apiPost(menu_base_url, body, options);
}

export async function updateMenu(body: Menu, options?: { [key: string]: any }) {
  return apiPut(menu_base_url, body, options);
}

export async function deleteMenu(id: string, options?: { [key: string]: any }) {
  return apiDelete(menu_base_url, id, options);
}
