import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/TableEntities/Builder';
import { ProductEntity } from '@/components/TableEntities/ProductEntity';
import type { Product } from '@/services/Device/Product/data';
import {
  addProduct,
  getProductById,
  updateProduct,
} from '@/services/Device/Product/service';

const ProductForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Product>(ProductEntity, intl)}</>;
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
