import { PageContainer, ProForm } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Form, message } from 'antd';
import React, { useEffect } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import UserFormFields from '@/components/FormFields/UserFormFields';
import type {
  CreateUserCommand,
  UpdateUserCommand,
} from '@/services/Sys/User/data.d';
import { addUser, getUserById, updateUser } from '@/services/Sys/User/service';

const UserEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getUserById(id).then((res) => {
        form.setFieldsValue(res);
      });
    }
  }, [id, form]);

  const onFinish = async (values: Record<string, any>) => {
    try {
      if (id) {
        await updateUser({ ...values, id } as UpdateUserCommand);
        message.success(
          intl.formatMessage({ id: 'common.actions.edit.success' }),
        );
      } else {
        await addUser({ ...values, id: uuid_v4() } as CreateUserCommand);
        message.success(
          intl.formatMessage({ id: 'common.actions.save.success' }),
        );
      }
      history.push('/sys/user');
    } catch (error) {
      // Error handling is managed by the global request error handler
    }
  };

  return (
    <PageContainer onBack={() => history.push('/sys/user')}>
      <ProForm form={form} onFinish={onFinish}>
        <UserFormFields />
      </ProForm>
    </PageContainer>
  );
};

export default UserEdit;
