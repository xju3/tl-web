export type Product = API.BaseModel & {
  code: string;
  name: string;
  m_date: string;
};

export type ProductFilter = API.BaseFilter & {
  code?: string;
  name?: string;
  mDate?: string;
}

export type ProductItem = {
  id: string;
  productId: string;
  deviceId: string;
  deviceCode: string;
  deviceName: string;
};
