import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const PeripheralFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="code"
        label={intl.formatMessage({ id: 'device.peripheral.code' })}
        rules={[
          rules.required('device.peripheral.code'),
          rules.length(2, 16, 'device.peripheral.code'),
        ]}
      />
      <CustomProFormText
        name="name"
        label={intl.formatMessage({ id: 'device.peripheral.name' })}
        rules={[
          rules.required('device.peripheral.name'),
          rules.length(2, 32, 'device.peripheral.name'),
        ]}
      />
    </>
  );
};

export default PeripheralFormFields;
