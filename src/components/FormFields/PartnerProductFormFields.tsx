import {
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import React, { useState } from 'react';
import ProductSelector from '@/components/Selectors/ProductSelector';

interface PartnerProductFormFieldsProps {
  form: any;
}

const PartnerProductFormFields: React.FC<PartnerProductFormFieldsProps> = ({
  form,
}) => {
  const intl = useIntl();
  const [productSelectorVisible, setProductSelectorVisible] = useState(false);

  return (
    <>
      <ProFormText name="id" hidden />
      <ProFormText name="partnerId" hidden />
      <ProForm.Item
        name="productId"
        label={intl.formatMessage({
          id: 'tenant.partner.product.productId',
        })}
      >
        <Button onClick={() => setProductSelectorVisible(true)}>
          {intl.formatMessage({ id: 'common.actions.select' })}
        </Button>
      </ProForm.Item>
      <ProFormText
        name="code"
        label={intl.formatMessage({ id: 'tenant.partner.product.code' })}
      />
      <ProFormDatePicker
        name="startTime"
        label={intl.formatMessage({
          id: 'tenant.partner.product.startTime',
        })}
      />
      <ProFormDatePicker
        name="endTime"
        label={intl.formatMessage({ id: 'tenant.partner.product.endTime' })}
      />
      <ProFormDatePicker
        name="ddate"
        label={intl.formatMessage({ id: 'tenant.partner.product.ddate' })}
      />
      <ProductSelector
        open={productSelectorVisible}
        onCancel={() => setProductSelectorVisible(false)}
        onOk={(product) => {
          form.setFieldsValue({ productId: product.id });
          setProductSelectorVisible(false);
        }}
      />
    </>
  );
};

export default PartnerProductFormFields;
