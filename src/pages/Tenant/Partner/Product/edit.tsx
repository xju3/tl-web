import {
  PageContainer,
  ProForm,
  ProFormDatePicker,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Form } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductSelector from '@/components/Selectors/ProductSelector';
import type { PartnerProductVo } from '@/services/Tenant/Partner/data';
import {
  createPartnerProduct,
  getPartnerProductById,
  updatePartnerProduct,
} from '@/services/Tenant/Partner/service';

const PartnerProductEditPage = () => {
  const { partnerId, id } = useParams<{ partnerId: string; id: string }>();
  const [form] = Form.useForm<PartnerProductVo>();
  const intl = useIntl();
  const [productSelectorVisible, setProductSelectorVisible] = useState(false);

  useEffect(() => {
    if (id) {
      getPartnerProductById(id).then((res) => {
        form.setFieldsValue(res);
      });
    } else {
      form.setFieldsValue({ id: uuidv4(), partnerId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const onFinish = async (values: PartnerProductVo) => {
    if (id) {
      await updatePartnerProduct({ ...values, id, partnerId: partnerId! });
    } else {
      await createPartnerProduct({ ...values, partnerId: partnerId! });
    }
    history.push(`/tenant/partner/view/${partnerId}`);
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <ProForm form={form} onFinish={onFinish}>
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
      </ProForm>
      <ProductSelector
        open={productSelectorVisible}
        onCancel={() => setProductSelectorVisible(false)}
        onOk={(product) => {
          form.setFieldsValue({ productId: product.id });
          setProductSelectorVisible(false);
        }}
      />
    </PageContainer>
  );
};

export default PartnerProductEditPage;
