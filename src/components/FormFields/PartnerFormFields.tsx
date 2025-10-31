import { ProFormSwitch } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const PartnerFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="code"
        rules={[rules.required('tenant.partner.code')]}
        label={intl.formatMessage({ id: 'tenant.partner.code' })}
      />
      <CustomProFormText
        name="name"
        rules={[rules.required('tenant.partner.name')]}
        label={intl.formatMessage({ id: 'tenant.partner.name' })}
      />
      <CustomProFormText
        name="address"
        label={intl.formatMessage({ id: 'tenant.partner.address' })}
      />
      <ProFormSwitch
        name="tenant"
        label={intl.formatMessage({ id: 'tenant.partner.tenant' })}
      />
    </>
  );
};

export default PartnerFormFields;
