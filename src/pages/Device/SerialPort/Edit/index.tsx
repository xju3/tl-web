import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Form } from 'antd';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { SerialPort } from '../data.d';
import { addSerialPort, getSerialPortById, updateSerialPort } from '../service';

const SerialPortEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = Form.useForm<SerialPort>();
  const intl = useIntl();

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
        <ProFormText
          name="code"
          label={intl.formatMessage({ id: 'device.serialport.code' })}
        />
        <ProFormText
          name="name"
          label={intl.formatMessage({ id: 'device.serialport.name' })}
        />
        <ProFormText
          name="protocol"
          label={intl.formatMessage({ id: 'device.serialport.protocol' })}
        />
        <ProFormDigit
          name="baudRate"
          label={intl.formatMessage({ id: 'device.serialport.baudRate' })}
        />
        <ProFormDigit
          name="dataBits"
          label={intl.formatMessage({ id: 'device.serialport.dataBits' })}
        />
        <ProFormDigit
          name="stopBits"
          label={intl.formatMessage({ id: 'device.serialport.stopBits' })}
        />
        <ProFormDigit
          name="parity"
          label={intl.formatMessage({ id: 'device.serialport.parity' })}
        />
        <ProFormText
          name="description"
          label={intl.formatMessage({ id: 'common.description' })}
        />
      </ProForm>
    </PageContainer>
  );
};

export default SerialPortEditPage;
