import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { MenuEntity } from '@/components/Entities/Sys/MenuEntity';
import type { Menu } from '@/services/Sys/Menu/data';
import { addMenu, getMenuById, updateMenu } from '@/services/Sys/Menu/service';

const MenuForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Menu>(MenuEntity, intl)}</>;
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
