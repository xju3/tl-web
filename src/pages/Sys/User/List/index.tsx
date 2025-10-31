import React from 'react';
import ListPage from '@/components/CommonPages/List';
import type { CustomProColumns } from '@/components/CommonPages/List/typing';
import type { User } from '@/services/Sys/User/data';
import { deleteUser, getUsers } from '@/services/Sys/User/service';

const SESSION_KEY = 'userListState';

const userListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<User>[] => [
    {
      title: intl.formatMessage({ id: 'page.sys.user.code' }),
      dataIndex: 'code',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.sys.user.name' }),
      dataIndex: 'name',
      valueType: 'text',
      sorter: {
        multiple: 2,
      },
    },
  ];

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
