import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { RoleEntity } from '@/components/Entities/Sys/RoleEntity';
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

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Role>[] => buildTableColumns(RoleEntity, intl);

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
