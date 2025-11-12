import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiGetById, apiPut, apiPutPage} from "@/services/common";
import {InstHost, InstHostFilter} from "@/services/Inst/Host/data";

const host_base_url = `inst/hosts`;
// 通用API响应结构 (成功时)
// 1. 获取主机列表 (分页)
export async function getInstHosts(params: ParamsType, sorter: Record<string, SortOrder>, filter: InstHostFilter) {
  return apiPutPage<InstHost>(host_base_url, params, filter, sorter);
}

// 2. 获取单个主机详情
export async function getInstHostById(id: string) {
  return apiGetById<InstHost>(host_base_url, id);
}



// 4. 更新主机 (API 返回 body 为 null)
export async function updateInstHost(data: InstHost) {
  return apiPut(host_base_url, data);
}

