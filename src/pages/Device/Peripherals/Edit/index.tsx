import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Peripheral } from '../data.d';
import { addPeripheral, getPeripheralById, updatePeripheral } from '../service';

const PeripheralEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<Peripheral>();

  useEffect(() => {
    if (id) {
      getPeripheralById(id).then((res) => {
        form.setFieldsValue(res);
      });
    }
  }, [id, form]);

  const onFinish = async (values: Partial<Peripheral>) => {
    if (id) {
      await updatePeripheral({ ...values, id });
    } else {
      await addPeripheral({ ...values, id: uuidv4() });
    }
    history.push('/device/peripherals');
  };

  return (
    <PageContainer>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText name="code" label="外设编码" />
        <ProFormText name="name" label="外设名称" />
      </ProForm>
    </PageContainer>
  );
};

export default PeripheralEditPage;
