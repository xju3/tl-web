import { ProFormDigit } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  addSerialPort,
  getSerialPortById,
  updateSerialPort,
} from '@/services/Device/SerialPort/service';
import { validationRules } from '@/utils/validation';

const SerialPortForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="code"
        label={intl.formatMessage({ id: 'device.serial-port.code' })}
        rules={[
          rules.required('device.serial-port.code'),
          rules.length(2, 16, 'device.serial-port.code'),
        ]}
      />
      <CustomProFormText
        name="name"
        label={intl.formatMessage({ id: 'device.serial-port.name' })}
        rules={[
          rules.required('device.serial-port.name'),
          rules.length(2, 32, 'device.serial-port.name'),
        ]}
      />
      <CustomProFormText
        name="protocol"
        label={intl.formatMessage({ id: 'device.serial-port.protocol' })}
      />
      <ProFormDigit
        name="baudRate"
        label={intl.formatMessage({ id: 'device.serial-port.baudRate' })}
      />
      <ProFormDigit
        name="dataBits"
        label={intl.formatMessage({ id: 'device.serial-port.dataBits' })}
      />
      <ProFormDigit
        name="stopBits"
        label={intl.formatMessage({ id: 'device.serial-port.stopBits' })}
      />
      <ProFormDigit
        name="parity"
        label={intl.formatMessage({ id: 'device.serial-port.parity' })}
      />
      <CustomProFormText
        name="description"
        label={intl.formatMessage({ id: 'common.description' })}
      />
    </>
  );
};

const SerialPortEditPage = () => {
  const services = {
    addItem: addSerialPort,
    updateItem: updateSerialPort,
    getItemById: getSerialPortById,
  };

  const backRoute = '/device/serial-ports';

  return (
    <EditPage<SerialPort> services={services} backRoute={backRoute}>
      <SerialPortForm />
    </EditPage>
  );
};

export default SerialPortEditPage;
