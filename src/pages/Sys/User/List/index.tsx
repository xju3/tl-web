import React from 'react';
import { columns } from '@/components/Columns/Pages/UserColumns';
import ListPage from '@/components/Common/Pages/List';
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
