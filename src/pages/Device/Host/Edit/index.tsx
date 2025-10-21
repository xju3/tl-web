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
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: 'common.err.code.required' }),
            },
            {
              min: 2,
              max: 8,
              message: intl.formatMessage(
                { id: 'common.err.length.range' },
                {
                  field: intl.formatMessage({ id: 'device.host.code' }),
                  min: 2,
                  max: 8,
                },
              ),
            },
          ]}
          bordered={true}
          width={'lg'}
          placeholder={'input code here, max length less than 8'}
          name="code"
          label={intl.formatMessage({ id: 'device.host.code' })}
        />
        <ProFormText
          name="name"
          rules={[
            {
              required: true,
              min: 2,
              max: 32,
              message: intl.formatMessage({ id: 'common.err.name.required' }),
            },
            {
              min: 2,
              max: 32,
              message: intl.formatMessage(
                { id: 'common.err.length.range' },
                {
                  field: intl.formatMessage({ id: 'device.host.name' }),
                  min: 2,
                  max: 32,
                },
              ),
            },
          ]}
          width={'lg'}
          label={intl.formatMessage({ id: 'device.host.name' })}
        />
        <ProFormText
          width={'lg'}
          name="ip"
          label={intl.formatMessage({ id: 'common.ip' })}
          rules={[
            {
              pattern:
                /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
              message: intl.formatMessage({ id: 'common.err.ip' }),
            },
          ]}
        />
      </ProForm>
    </PageContainer>
  );
};

export default HostEditPage;
