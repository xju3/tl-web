import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { SerialPort } from '../data.d';
import { addSerialPort, getSerialPortById, updateSerialPort } from '../service';

const SerialPortEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<SerialPort>();

  useEffect(() => {
    if (id) {
      getSerialPortById(id).then((res) => {
        form.setFieldsValue(res);
      });
    }
  }, [id, form]);

  const onFinish = async (values: Partial<SerialPort>) => {
    if (id) {
      await updateSerialPort({ ...values, id });
    } else {
      await addSerialPort({ ...values, id: uuidv4() });
    }
    history.push('/device/serial-ports');
  };

  return (
    <PageContainer>
      <ProForm form={form} onFinish={onFinish}>
        <ProFormText name="name" label="名称" />
        <ProFormText name="port" label="端口" />
        <ProFormDigit name="baudRate" label="波特率" />
        <ProFormDigit name="dataBits" label="数据位" />
        <ProFormDigit name="stopBits" label="停止位" />
        <ProFormDigit name="parity" label="校验位" />
        <ProFormText name="description" label="描述" />
      </ProForm>
    </PageContainer>
  );
};

export default SerialPortEditPage;
