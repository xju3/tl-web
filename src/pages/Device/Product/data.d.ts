export type Product = {
  id: string;
  code: string;
  name: string;
  m_date: string;
};

export type ProductItem = {
  id: string;
  productId: string;
  deviceId: string;
  deviceCode: string;
  deviceName: string;
};
