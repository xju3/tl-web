import {
  PageContainer,
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Product } from './data.d';
import { addProduct, getProductById, updateProduct } from './service';

const ProductEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<Product>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getProductById(id).then((res) => {
        form.setFieldsValue(res);
      });
    } else {
      form.setFieldsValue({ id: uuidv4() });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onFinish = async (values: Product) => {
    if (id) {
      await updateProduct({ ...values, id });
    } else {
      await addProduct(values);
    }
    history.push('/device/product');
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText name="id" hidden />
        <ProFormText
          name="code"
          label={intl.formatMessage({ id: 'device.product.code' })}
        />
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'device.product.name' })}
        />
        <ProFormDatePicker
          name="m_date"
          label={intl.formatMessage({ id: 'device.product.m_date' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default ProductEditPage;
