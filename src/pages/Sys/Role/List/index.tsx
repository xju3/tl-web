import React from 'react';
import ListPage from '@/components/CommonPages/List';
import type { CustomProColumns } from '@/components/CommonPages/List/typing';
import type { Role } from '@/services/Sys/Role/data';
import { deleteRole, getRoles } from '@/services/Sys/Role/service';

const SESSION_KEY = 'roleListState';

const roleListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Role>[] => [
    {
      title: intl.formatMessage({ id: 'page.sys.role.code' }),
      dataIndex: 'code',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.role.name' }),
      dataIndex: 'name',
      valueType: 'text',
      sorter: {
        multiple: 2,
      },
    },
  ];

  const services = {
    getList: getRoles,
    deleteItem: deleteRole,
  };

  const routes = {
    add: '/sys/role/add',
    edit: '/sys/role/edit',
    view: '/sys/role/view',
  };

  return (
    <ListPage<Role>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default roleListPage;
