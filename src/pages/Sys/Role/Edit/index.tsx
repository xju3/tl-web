import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Form, message } from 'antd';
import React, { useEffect } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import type {
  CreateRoleCommand,
  UpdateRoleCommand,
} from '@/services/Sys/Role/data.d';
import { addRole, getRoleById, updateRole } from '@/services/Sys/Role/service';

const RoleEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getRoleById(id).then((res) => {
        if (res.statusCode === 'OK') {
          form.setFieldsValue(res.body);
        }
      });
    }
  }, [id, form]);

  const onFinish = async (values: Record<string, any>) => {
    try {
      if (id) {
        await updateRole({ ...values, id } as UpdateRoleCommand);
        message.success(
          intl.formatMessage({ id: 'common.actions.edit.success' }),
        );
      } else {
        await addRole({ ...values, id: uuid_v4() } as CreateRoleCommand);
        message.success(
          intl.formatMessage({ id: 'common.actions.save.success' }),
        );
      }
      history.push('/sys/role');
    } catch (error) {
      // Error handling is managed by the global request error handler
    }
  };

  return (
    <PageContainer onBack={() => history.push('/sys/role')}>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'page.sys.role.name' })}
        />
        <ProFormText
          name="code"
          label={intl.formatMessage({ id: 'page.sys.role.code' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default RoleEdit;
