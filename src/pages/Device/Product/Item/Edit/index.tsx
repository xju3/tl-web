import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { ProductItemEntity } from '@/components/Entities/ProductItemEntity';
import type { ProductItem } from '@/services/Device/Product/data';
import {
  addProductItem,
  getProductItemById,
  updateProductItem,
} from '@/services/Device/Product/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<ProductItem>>;
}

const ProductItemForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return <>{buildFormFields<ProductItem>(ProductItemEntity, intl, formRef)}</>;
};

const ProductItemPage = () => {
  const services = {
    addItem: addProductItem,
    updateItem: updateProductItem,
    getItemById: getProductItemById,
  };

  const backRoute = '/device/product/view/:id';

  return (
    <EditPage<ProductItem> services={services} backRoute={backRoute}>
      <ProductItemForm />
    </EditPage>
  );
};

export default ProductItemPage;
