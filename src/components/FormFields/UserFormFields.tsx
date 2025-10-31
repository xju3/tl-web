import { ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const UserFormFields: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <ProFormText
        name="username"
        label={intl.formatMessage({ id: 'sys.user.username' })}
      />
      <ProFormText.Password
        name="password"
        label={intl.formatMessage({ id: 'sys.user.password' })}
      />
      <ProFormText
        name="employeeId"
        label={intl.formatMessage({ id: 'sys.user.employeeId' })}
      />
    </>
  );
};

export default UserFormFields;
