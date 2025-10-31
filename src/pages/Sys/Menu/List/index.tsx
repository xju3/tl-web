import React from 'react';
import { columns } from '@/components/Columns/Pages/MenuColumns';
import ListPage from '@/components/Common/Pages/List';
import type { Menu } from '@/services/Sys/Menu/data';
import { deleteMenu, getMenus } from '@/services/Sys/Menu/service';

const SESSION_KEY = 'menuListState';

const menuListPage = () => {
  const services = {
    getList: getMenus,
    deleteItem: deleteMenu,
  };

  const routes = {
    add: '/sys/menu/add',
    edit: '/sys/menu/edit',
    view: '/sys/menu/view',
  };

  return (
    <ListPage<Menu>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default menuListPage;
