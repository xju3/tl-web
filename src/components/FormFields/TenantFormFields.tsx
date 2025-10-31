import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const TenantFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="name"
        rules={[rules.required('org.tenant.name')]}
        label={intl.formatMessage({ id: 'org.tenant.name' })}
      />
      <CustomProFormText
        name="code"
        rules={[rules.required('org.tenant.code')]}
        label={intl.formatMessage({ id: 'org.tenant.code' })}
      />
    </>
  );
};

export default TenantFormFields;
