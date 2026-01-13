import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { AppEntity } from '@/components/Entities/Sys/AppEntity';
import type { App } from '@/services/Sys/App/data.d';
import { addApp, getAppById, updateApp } from '@/services/Sys/App/service';

const AppForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<App>(AppEntity, intl)}</>;
};

const AppEditPage = () => {
  const services = {
    addItem: addApp,
    updateItem: updateApp,
    getItemById: getAppById,
  };

  const backRoute = '/sys/apps';

  return (
    <EditPage<App> services={services} backRoute={backRoute}>
      <AppForm />
    </EditPage>
  );
};

export default AppEditPage;
