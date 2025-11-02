import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { UserEntity } from '@/components/Entities/Sys/UserEntity';
import type { User } from '@/services/Sys/User/data';
import { deleteUser, getUsers } from '@/services/Sys/User/service';

const SESSION_KEY = 'userListState';

const userListPage = () => {
  const services = {
    getList: getUsers,
    deleteItem: deleteUser,
  };

  const routes = {
    add: '/sys/user/add',
    edit: '/sys/user/edit',
    view: '/sys/user/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<User>[] => buildTableColumns(UserEntity, intl);

  return (
    <ListPage<User>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default userListPage;
