import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useLocation, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Host } from '../data.d';
import { addHost, getHostById, updateHost } from '../service';

const HostEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [form] = Form.useForm<Host>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getHostById(id).then((res) => {
        form.setFieldsValue(res);
      });
    }
  }, [id, form]);

  const onFinish = async (values: Partial<Host>) => {
    if (id) {
      await updateHost({ ...values, id });
      history.back();
    } else {
      await addHost({ ...values, id: uuidv4() });
      history.push('/device/hosts');
    }
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText
          name="code"
          label={intl.formatMessage({ id: 'common.code' })}
        />
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'common.name' })}
        />
        <ProFormText
          name="ip"
          label={intl.formatMessage({ id: 'common.ip' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default HostEditPage;
