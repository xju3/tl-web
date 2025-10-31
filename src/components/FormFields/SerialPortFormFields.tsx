import { ProFormDigit } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const SerialPortFormFields: React.FC = () => {
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

export default SerialPortFormFields;
