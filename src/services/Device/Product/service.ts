import type {Product, ProductFilter, ProductItem} from './data';
import {ParamsType} from "@ant-design/pro-components";
import {SortOrder} from "antd/es/table/interface";
import {apiCreate, apiDelete, apiGetById, apiGetPage, apiPutPage, apiUpdate} from "@/services/common";

const product_base_url = "device/products"
// 1. 获取产品列表 (分页)
export async function getProducts(params: ParamsType, sorters: Record<string, SortOrder>, filter: ProductFilter) {
  return apiPutPage<Product>(product_base_url, params, filter, sorters);
}

// 2. 获取单个产品详情
export async function getProductById(id: string) {
  return apiGetById<Product>(product_base_url, id);
}

// 3. 新增产品
export async function addProduct(data: Product) {
  return apiCreate<Product>(product_base_url, data);
}

// 4. 更新产品
export async function updateProduct(data: Product) {
  return apiUpdate<Product>(product_base_url, data);
}

// 5. 删除产品
export async function deleteProduct(id: string) {
  return apiDelete(product_base_url, id);
}

// 6. 获取产品关联项列表
export async function getProductItems(productId: string, params: ParamsType) {
  console.log(params);
  console.log(productId);
  const url = `${product_base_url}/${productId}/items`;
  return apiGetPage<ProductItem>(url, params);
}

// 7. 新增产品关联项
export async function addProductItem(
  data: ProductItem,
) {
  const url = `${product_base_url}/${data.productId}/items`;
  return apiCreate<ProductItem>(url, data);
}

// 8. 更新产品关联项
export async function updateProductItem(
  data: ProductItem,
) {
  const url = `${product_base_url}/${data.productId}/items`;
  return apiUpdate<ProductItem>(url, data);
}

// 9. 删除产品关联项
export async function deleteProductItem(productId: string, id: string) {
  const url = `${product_base_url}/${productId}/items`;
  return apiDelete(url, id);
}

export async function getProductItemById(
  id: string,
) {
  const url = `${product_base_url}/items/`;
  return apiGetById<ProductItem>(url, id);
}
