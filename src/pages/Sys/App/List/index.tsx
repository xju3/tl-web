import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { AppEntity } from '@/components/Entities/Sys/AppEntity';
import type { App } from '@/services/Sys/App/data';
import { deleteApp, getApps } from '@/services/Sys/App/service';

const SESSION_KEY = 'appListState';

const appListPage = () => {
  const services = {
    getList: getApps,
    deleteItem: deleteApp,
  };

  const routes = {
    add: '/sys/app/add',
    edit: '/sys/app/edit',
    view: '/sys/app/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<App>[] => buildTableColumns(AppEntity, intl);

  return (
    <ListPage<App>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default appListPage;
