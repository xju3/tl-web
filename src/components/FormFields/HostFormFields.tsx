import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const HostFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        rules={[
          rules.required('device.host.code'),
          rules.length(2, 8, 'device.host.code'),
        ]}
        bordered={true}
        width={'lg'}
        placeholder={'input code here, max length less than 8'}
        name="code"
        label={intl.formatMessage({ id: 'device.host.code' })}
      />
      <CustomProFormText
        name="name"
        rules={[
          rules.required('device.host.name'),
          rules.length(2, 32, 'device.host.name'),
        ]}
        width={'lg'}
        label={intl.formatMessage({ id: 'device.host.name' })}
      />
      <CustomProFormText
        width={'lg'}
        name="ip"
        label={intl.formatMessage({ id: 'common.ip' })}
        rules={[rules.ip('common.ip')]}
      />
    </>
  );
};

export default HostFormFields;
