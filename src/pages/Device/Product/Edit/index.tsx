import { ProFormDatePicker } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Product } from '@/services/Device/Product/data';
import {
  addProduct,
  getProductById,
  updateProduct,
} from '@/services/Device/Product/service';
import { validationRules } from '@/utils/validation';

const ProductForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="code"
        label={intl.formatMessage({ id: 'device.product.code' })}
        rules={[
          rules.required('device.product.code'),
          rules.length(2, 16, 'device.product.code'),
        ]}
      />
      <CustomProFormText
        name="name"
        label={intl.formatMessage({ id: 'device.product.name' })}
        rules={[
          rules.required('device.product.name'),
          rules.length(2, 32, 'device.product.name'),
        ]}
      />
      <ProFormDatePicker
        name="m_date"
        label={intl.formatMessage({ id: 'device.product.m_date' })}
      />
    </>
  );
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
