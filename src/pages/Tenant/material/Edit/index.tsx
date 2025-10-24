import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useEffect } from 'react';
import { history, useIntl, useParams } from 'umi';
import { v4 as uuidv4 } from 'uuid';
import type {
  CreateMaterialCommand,
  MaterialVo,
  UpdateMaterialCommand,
} from '@/services/Tenant/data';
import {
  createMaterial,
  getMaterial,
  updateMaterial,
} from '@/services/Tenant/service';

const MaterialEdit: React.FC = () => {
  const intl = useIntl();
  const [form] = ProForm.useForm<MaterialVo>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      getMaterial(id).then((response) => {
        form.setFieldsValue(response);
      });
    } else {
      form.setFieldsValue({ id: uuidv4() });
    }
  }, [id, form]);

  const onFinish = async (
    values: CreateMaterialCommand | UpdateMaterialCommand,
  ) => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.saving' }),
    );
    try {
      if (id) {
        await updateMaterial({ ...values, id });
      } else {
        await createMaterial(values as CreateMaterialCommand);
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
          label={intl.formatMessage({ id: 'tenant.material.code' })}
          rules={[{ required: true }]}
        />
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'tenant.material.name' })}
          rules={[{ required: true }]}
        />
        <ProFormText
          name="weight"
          label={intl.formatMessage({ id: 'tenant.material.weight' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default MaterialEdit;
