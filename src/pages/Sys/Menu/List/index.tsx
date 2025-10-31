import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { MenuEntity } from '@/components/TableEntities/MenuEntity';
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

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Menu>[] => buildTableColumns(MenuEntity, intl);

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
