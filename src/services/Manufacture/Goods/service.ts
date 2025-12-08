import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiDelete, apiGetById, apiPost, apiPut, apiPutPage} from "@/services/common";
import {Goods, GoodsFilter} from "@/services/Manufacture/Goods/data";

const base_url = `manufacture/goods`;

export async function createGoods(data: Goods) {
  return apiPost(base_url, data);
}

export async function getGoodsList(params: ParamsType, sorter: Record<string, SortOrder>, filter: GoodsFilter) {
  return apiPutPage<Goods>(base_url, params, filter, sorter);
}

// 2. 获取单个主机详情
export async function getGoodsById(id: string) {
  return apiGetById<Goods>(base_url, id);
}

export async function deleteGoods(recordId: string) {
  const url = `${base_url}/${recordId}`
  return apiDelete(url, recordId);
}

// 4. 更新主机 (API 返回 body 为 null)
export async function updateGoods(data: Goods) {
  return apiPut(base_url, data);
}
