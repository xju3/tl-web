import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Menu } from '@/services/Sys/Menu/data';
import { deleteMenu, getMenus } from '@/services/Sys/Menu/service';

const SESSION_KEY = 'menuListState';

const menuListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Menu>[] => [
    {
      title: intl.formatMessage({ id: 'page.sys.menu.code' }),
      dataIndex: 'code',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.name' }),
      dataIndex: 'name',
      valueType: 'text',
      sorter: {
        multiple: 2,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.path' }),
      dataIndex: 'path',
      valueType: 'text',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.component' }),
      dataIndex: 'component',
      valueType: 'text',
      sorter: {
        multiple: 4,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.icon' }),
      dataIndex: 'icon',
      valueType: 'text',
      sorter: {
        multiple: 5,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.type' }),
      dataIndex: 'type',
      valueType: 'text',
      sorter: {
        multiple: 6,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.visible' }),
      dataIndex: 'visible',
      valueType: 'text',
      sorter: {
        multiple: 7,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.menu.permission' }),
      dataIndex: 'permission',
      valueType: 'text',
      sorter: {
        multiple: 8,
      },
    },
  ];

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
