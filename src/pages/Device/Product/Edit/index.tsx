import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import ProductFormFields from '@/components/FormFields/ProductFormFields';
import type { Product } from '@/services/Device/Product/data';
import {
  addProduct,
  getProductById,
  updateProduct,
} from '@/services/Device/Product/service';

const ProductForm: React.FC = () => {
  return <ProductFormFields />;
};

const ProductEditPage = () => {
  const services = {
    addItem: addProduct,
    updateItem: updateProduct,
    getItemById: getProductById,
  };

  const backRoute = '/device/product';

  return (
    <EditPage<Product> services={services} backRoute={backRoute}>
      <ProductForm />
    </EditPage>
  );
};

export default ProductEditPage;
