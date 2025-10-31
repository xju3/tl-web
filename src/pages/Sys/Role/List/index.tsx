import React from 'react';
import { columns } from '@/components/Columns/Pages/RoleColumns';
import ListPage from '@/components/Common/Pages/List';
import type { Role } from '@/services/Sys/Role/data';
import { deleteRole, getRoles } from '@/services/Sys/Role/service';

const SESSION_KEY = 'roleListState';

const roleListPage = () => {
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
