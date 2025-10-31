import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import MenuFormFields from '@/components/FormFields/MenuFormFields';
import type { Menu } from '@/services/Sys/Menu/data';
import { addMenu, getMenuById, updateMenu } from '@/services/Sys/Menu/service';

const MenuForm: React.FC = () => {
  return <MenuFormFields />;
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
