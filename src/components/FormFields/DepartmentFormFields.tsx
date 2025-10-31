import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const DepartmentFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="parentId"
        label={intl.formatMessage({ id: 'org.department.parentId' })}
      />
      <CustomProFormText
        name="companyId"
        label={intl.formatMessage({ id: 'org.department.companyId' })}
      />
      <CustomProFormText
        name="name"
        rules={[rules.required('org.department.name')]}
        label={intl.formatMessage({ id: 'org.department.name' })}
      />
      <CustomProFormText
        name="code"
        rules={[rules.required('org.department.code')]}
        label={intl.formatMessage({ id: 'org.department.code' })}
      />
    </>
  );
};

export default DepartmentFormFields;
