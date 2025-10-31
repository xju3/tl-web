import { ProFormDigit } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/CommonPages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Menu } from '@/services/Sys/Menu/data';
import { addMenu, getMenuById, updateMenu } from '@/services/Sys/Menu/service';
import { validationRules } from '@/utils/validation';

const MenuForm: React.FC = () => {
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

const MenuEditPage = () => {
  const services = {
    addItem: addMenu,
    updateItem: updateMenu,
    getItemById: getMenuById,
  };

  const backRoute = '/sys/menu';

  return (
    <EditPage<Menu> services={services} backRoute={backRoute}>
      <MenuForm />
    </EditPage>
  );
};

export default MenuEditPage;
