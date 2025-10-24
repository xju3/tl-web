import { request } from '@umijs/max';
import type { PageParams } from '@/services/common';
import type { Product, ProductItem } from './data';
import type {PartnerVo} from "@/services/Tenant/Partner/data";

// 1. 获取产品列表 (分页)
export async function getProducts(params: PageParams & Partial<Product>) {
  const { currPage = 1, pageSize = 10, sorter, ...filter } = params;

  const payload: any = { ...filter };
  if (sorter && Object.keys(sorter).length) {
    payload.sorters = Object.entries(sorter).map(([key, value]) => ({
      fieldName: key,
      direction: value === 'ascend' ? 0 : 1,
    }));
  }

  const res = await request<API.ResponseEntity<API.IPage<Product>>>(`/products/${currPage}/${pageSize}`, {
    method: 'PUT',
    data: payload,
  });

  return {
    data: res.body.records || [],
    success: true,
    total: res.body.total || 0,
  };
}

// 2. 获取单个产品详情
export async function getProductById(id: string) {
  var response = await request(`/products/${id}`, {
    method: 'GET',
  });
  return response.body;
}

// 3. 新增产品
export async function addProduct(data: Partial<Product>) {
  return request('/products', {
    method: 'POST',
    data,
  });
}

// 4. 更新产品
export async function updateProduct(data: Partial<Product>) {
  return request('/products', {
    method: 'PUT',
    data,
  });
}

// 5. 删除产品
export async function deleteProduct(id: string) {
  return request(`/products/${id}`, {
    method: 'DELETE',
  });
}

// 6. 获取产品关联项列表
export async function getProductItems(productId: string) {
  return request(`/products/${productId}/items`, {
    method: 'GET',
  });
}

// 7. 新增产品关联项
export async function addProductItem(
  productId: string,
  data: Partial<ProductItem>,
) {
  return request(`/products/${productId}/items`, {
    method: 'POST',
    data,
  });
}

// 8. 更新产品关联项
export async function updateProductItem(
  productId: string,
  itemId: string,
  data: Partial<ProductItem>,
) {
  return request(`/products/${productId}/items/${itemId}`, {
    method: 'PUT',
    data,
  });
}

// 9. 删除产品关联项
export async function deleteProductItem(productId: string, itemId: string) {
  return request(`/products/${productId}/items/${itemId}`, {
    method: 'DELETE',
  });
}

// 10. 获取机柜列表 (用于选择模态框)
export async function getCabinets(
  params: PageParams & { code?: string; name?: string },
) {
  const { currPage = 1, pageSize = 10, sorter, ...filter } = params;

  const payload: any = { ...filter, nullParentId: true };
  if (sorter && Object.keys(sorter).length) {
    payload.sorters = Object.entries(sorter).map(([key, value]) => ({
      fieldName: key,
      direction: value === 'ascend' ? 0 : 1,
    }));
  }

  const res = await request(`/cabinets/${currPage}/${pageSize}`, {
    method: 'GET',
    params: payload,
  });

  return {
    data: res.records || [],
    success: true,
    total: res.total || 0,
  };
}
