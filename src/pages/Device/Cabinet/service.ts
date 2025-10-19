import { request } from '@umijs/max';
import type { Peripheral } from '../Peripherals/data.d';
import type {
  Cabinet,
  CabinetPageParams,
  CabinetPeripheral,
  Cable,
} from './data.d';

// 通用API响应结构 (成功时)
type ApiResponse<T> = {
  body: T;
  headers: Record<string, any>;
  statusCode: string;
  statusCodeValue: number;
};

// 1. 获取机柜列表 (树形)
export async function getCabinets(params: CabinetPageParams) {
  const { currPage, pageSize, code, name, ip, nullParentId, sorter } = params;
  const filter: {
    code?: string;
    name?: string;
    ip?: string;
    nullParentId?: boolean;
    sorters?: { fieldName: string; direction: number }[];
  } = { code, name, ip, nullParentId };

  if (sorter && Object.keys(sorter).length > 0) {
    const proTableSorter = sorter as Record<
      string,
      'ascend' | 'descend' | null
    >;
    filter.sorters = Object.keys(proTableSorter)
      .filter((key) => proTableSorter[key])
      .map((key) => ({
        fieldName: key,
        direction: proTableSorter[key] === 'ascend' ? 0 : 1,
      }));
  }

  var url = `/cabinets/${currPage}/${pageSize}`;
  filter.nullParentId = true;
  const response = await request<
    ApiResponse<{ records: Cabinet[]; total: number }>
  >(url, {
    method: 'PUT',
    data: filter,
  });
  // 直接返回 ProTable 需要的数据结构
  return {
    data: response.body.records || [],
    success: true,
    total: response.body.total || 0,
  };
}

// 2. 获取单个机柜详情
export async function getCabinetById(id: string) {
  const response = await request<ApiResponse<Cabinet>>(`/cabinets/${id}`, {
    method: 'GET',
  });
  // 直接返回 body 中的机柜对象
  return response.body;
}

// 3. 新增机柜 (API 返回 body 为新机柜 ID 字符串)
export async function addCabinet(data: Partial<Cabinet>) {
  return request<ApiResponse<string>>('/cabinets', {
    method: 'POST',
    data,
  });
}

// 4. 更新机柜 (API 返回 body 为 null)
export async function updateCabinet(data: Partial<Cabinet>) {
  return request<ApiResponse<null>>('/cabinets', {
    method: 'PUT',
    data,
  });
}

// 5. 删除机柜 (API 返回 body 为 null)
export async function deleteCabinet(id: string) {
  return request<ApiResponse<null>>(`/cabinets/${id}`, {
    method: 'DELETE',
  });
}

// 6. 获取机柜下的外设列表
export async function getPeripheralsByCabinetId(
  cabinetId: string,
  params: { currPage: number; pageSize: number },
) {
  const { currPage, pageSize } = params;
  const response = await request<
    ApiResponse<{ records: Peripheral[]; total: number }>
  >(`/cabinets/${cabinetId}/peripherals/${currPage}/${pageSize}`, {
    method: 'GET',
  });
  return {
    data: response.body.records || [],
    success: true,
    total: response.body.total || 0,
  };
}

// 7. 新增机柜外设绑定
export async function addCabinetPeripheral(data: CabinetPeripheral) {
  return request<ApiResponse<string>>('/cabinets/peripherals', {
    method: 'POST',
    data,
  });
}

// 8. 更新机柜外设绑定
export async function updateCabinetPeripheral(data: CabinetPeripheral) {
  return request<ApiResponse<null>>('/cabinets/peripherals', {
    method: 'PUT',
    data,
  });
}

// 9. 获取单个机柜外设绑定详情
export async function getCabinetPeripheralById(id: string) {
  const response = await request<ApiResponse<CabinetPeripheral>>(
    `/cabinets/peripherals/${id}`,
    {
      method: 'GET',
    },
  );
  return response.body;
}

// 10. 删除机柜外设绑定
export async function deleteCabinetPeripheral(cabinetId: string, id: string) {
  return request<ApiResponse<null>>(
    `/cabinets/peripherals/${cabinetId}/${id}`,
    {
      method: 'DELETE',
    },
  );
}

// 11. 获取机柜下的线缆列表
export async function getCabinetCables(cabinetId: string) {
  const response = await request<ApiResponse<Cable[]>>(
    `/cabinets/${cabinetId}/cables`,
    {
      method: 'GET',
    },
  );
  return {
    data: response.body || [],
    success: true,
  };
}

// Get single cable by id
export async function getCabinetCableById(id: string) {
  const response = await request<ApiResponse<Cable>>(`/cabinets/cables/${id}`, {
    method: 'GET',
  });
  return response.body;
}

// 12. 新增机柜线缆
export async function addCabinetCables(data: Cable) {
  return request<ApiResponse<string>>('/cabinets/cables', {
    method: 'POST',
    data,
  });
}

// 13. 更新机柜线缆
export async function updateCabinetCables(data: Cable) {
  return request<ApiResponse<null>>('/cabinets/cables', {
    method: 'PUT',
    data,
  });
}

// 14. 删除机柜线缆
export async function deleteCabinetCable(cabinetId: string, id: string) {
  return request<ApiResponse<null>>(`/cabinets/cables/${cabinetId}/${id}`, {
    method: 'DELETE',
  });
}
