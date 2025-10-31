import { ProFormDigit } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const MenuFormFields: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="parentId"
        label={intl.formatMessage({ id: 'page.sys.menu.parentId' })}
      />
      <CustomProFormText
        name="name"
        rules={[rules.required('page.sys.menu.name')]}
        label={intl.formatMessage({ id: 'page.sys.menu.name' })}
      />
      <CustomProFormText
        name="path"
        label={intl.formatMessage({ id: 'page.sys.menu.path' })}
      />
      <CustomProFormText
        name="component"
        label={intl.formatMessage({ id: 'page.sys.menu.component' })}
      />
      <CustomProFormText
        name="icon"
        label={intl.formatMessage({ id: 'page.sys.menu.icon' })}
      />
      <CustomProFormText
        name="type"
        label={intl.formatMessage({ id: 'page.sys.menu.type' })}
      />
      <ProFormDigit
        name="sortOrder"
        label={intl.formatMessage({ id: 'page.sys.menu.sortOrder' })}
      />
      <CustomProFormText
        name="visible"
        label={intl.formatMessage({ id: 'page.sys.menu.visible' })}
      />
      <CustomProFormText
        name="permission"
        label={intl.formatMessage({ id: 'page.sys.menu.permission' })}
      />
    </>
  );
};

export default MenuFormFields;
