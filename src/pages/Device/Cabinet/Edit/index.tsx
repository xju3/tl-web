import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Cabinet } from '../data.d';
import { addCabinet, getCabinetById, updateCabinet } from '../service';

const CabinetEditPage = () => {
  const { id, parentId } = useParams<{ id: string; parentId: string }>();
  const [form] = Form.useForm<Cabinet>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      // Edit mode
      getCabinetById(id).then((res) => {
        const { children, ...formData } = res;
        form.setFieldsValue(formData);
      });
    } else if (parentId) {
      // Add child mode
      form.setFieldsValue({ parentId });
    }
  }, [id, parentId, form]);

  const onFinish = async (values: Partial<Cabinet>) => {
    if (id) {
      await updateCabinet({ ...values, id });
      history.back();
    } else {
      const { parentId, ...rest } = values;
      await addCabinet({ ...rest, id: uuidv4(), parentId });
      history.push('/device/cabinets');
    }
  };

  const isEdit = !!id;

  return (
    <PageContainer onBack={() => history.back()} extra={[]}>
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
                  field: intl.formatMessage({ id: 'common.code' }),
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
          label={intl.formatMessage({ id: 'common.code' })}
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
                  field: intl.formatMessage({ id: 'common.name' }),
                  min: 2,
                  max: 32,
                },
              ),
            },
          ]}
          width={'lg'}
          label={intl.formatMessage({ id: 'common.name' })}
        />
        <ProFormText width={'lg'} name="parentId" hidden={true} />
      </ProForm>
    </PageContainer>
  );
};

export default CabinetEditPage;
