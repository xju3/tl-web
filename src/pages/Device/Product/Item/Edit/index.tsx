import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { ProductItemEntity } from '@/components/Entities/Device/ProductItemEntity';
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

const ProductItemEditPage = () => {
  const services = {
    addItem: addProductItem,
    updateItem: updateProductItem,
    getItemById: getProductItemById,
  };

  return (
    <EditPage<ProductItem> services={services}>
      <ProductItemForm />
    </EditPage>
  );
};

export default ProductItemEditPage;
