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
        rules={[rules.required('page.org.tenant.name')]}
        label={intl.formatMessage({ id: 'page.org.tenant.name' })}
      />
      <CustomProFormText
        name="code"
        rules={[rules.required('page.org.tenant.code')]}
        label={intl.formatMessage({ id: 'page.org.tenant.code' })}
      />
    </>
  );
};

export default TenantFormFields;
