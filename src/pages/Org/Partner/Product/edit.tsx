import { PageContainer, ProForm } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PartnerProductFormFields from '@/components/FormFields/PartnerProductFormFields';
import type { PartnerProductVo } from '@/services/Org/Partner/data';
import {
  createPartnerProduct,
  getPartnerProductById,
  updatePartnerProduct,
} from '@/services/Org/Partner/service';

const PartnerProductEditPage = () => {
  const { partnerId, id } = useParams<{ partnerId: string; id: string }>();
  const [form] = Form.useForm<PartnerProductVo>();

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
        <PartnerProductFormFields form={form} />
      </ProForm>
    </PageContainer>
  );
};

export default PartnerProductEditPage;
