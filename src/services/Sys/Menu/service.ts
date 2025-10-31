import type {MenuFilter, CreateMenuCommand, UpdateMenuCommand, Menu} from './data.d';
import {apiCreate, apiDelete, apiGetById, apiPutPage, apiUpdate} from "@/services/common";
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
  return apiGetById<Menu>(menu_base_url, id, options);
}

export async function addMenu(body: CreateMenuCommand, options?: { [key: string]: any }) {
  return apiCreate(menu_base_url, body, options);
}

export async function updateMenu(body: UpdateMenuCommand, options?: { [key: string]: any }) {
  return apiUpdate(menu_base_url, body, options);
}

export async function deleteMenu(id: string, options?: { [key: string]: any }) {
  return apiDelete(menu_base_url, id, options);
}
