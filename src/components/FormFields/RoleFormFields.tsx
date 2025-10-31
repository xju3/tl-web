import { ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const RoleFormFields: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <ProFormText
        name="name"
        label={intl.formatMessage({ id: 'page.sys.role.name' })}
      />
      <ProFormText
        name="code"
        label={intl.formatMessage({ id: 'page.sys.role.code' })}
      />
    </>
  );
};

export default RoleFormFields;
