import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const EmployeeFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="personId"
        label={intl.formatMessage({ id: 'org.employee.personId' })}
      />
      <CustomProFormText
        name="employeeNumber"
        rules={[rules.required('org.employee.employeeNumber')]}
        label={intl.formatMessage({ id: 'org.employee.employeeNumber' })}
      />
    </>
  );
};

export default EmployeeFormFields;
