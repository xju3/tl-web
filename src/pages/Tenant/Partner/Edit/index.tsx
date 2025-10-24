import {
  PageContainer,
  ProForm,
  ProFormSwitch,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { message } from 'antd';
import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type {
  CreatePartnerCommand,
  PartnerVo,
  UpdatePartnerCommand,
} from '@/services/Tenant/Partner/data';
import {
  createPartner,
  getPartner,
  updatePartner,
} from '@/services/Tenant/Partner/service';

const PartnerEdit: React.FC = () => {
  const intl = useIntl();
  const [form] = ProForm.useForm<PartnerVo>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getPartner(id).then((response) => {
        form.setFieldsValue(response);
      });
    } else {
      form.setFieldsValue({ id: uuidv4() });
    }
  }, [id, form]);

  const onFinish = async (
    values: CreatePartnerCommand | UpdatePartnerCommand,
  ) => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.saving' }),
    );
    try {
      if (id) {
        await updatePartner({ ...values, id });
      } else {
        await createPartner(values as CreatePartnerCommand);
      }
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.save.success' }),
      );
      history.back();
    } catch (error) {
      hide();
      message.error(intl.formatMessage({ id: 'pages.searchTable.save.fail' }));
    }
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText name="id" hidden />
        <ProFormText
          name="code"
          label={intl.formatMessage({ id: 'tenant.partner.code' })}
          rules={[{ required: true }]}
        />
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'tenant.partner.name' })}
          rules={[{ required: true }]}
        />
        <ProFormText
          name="address"
          label={intl.formatMessage({ id: 'tenant.partner.address' })}
        />
        <ProFormSwitch
          name="tenant"
          label={intl.formatMessage({ id: 'tenant.partner.tenant' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default PartnerEdit;
