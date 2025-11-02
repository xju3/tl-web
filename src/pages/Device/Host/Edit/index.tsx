import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { HostEntity } from '@/components/Entities/Device/HostEntity';
import type { Host } from '@/services/Device/Host/data';
import {
  addHost,
  getHostById,
  updateHost,
} from '@/services/Device/Host/service';

const HostForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Host>(HostEntity, intl)}</>;
};

const HostEditPage = () => {
  const services = {
    addItem: addHost,
    updateItem: updateHost,
    getItemById: getHostById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<Host> services={services} backRoute={backRoute}>
      <HostForm />
    </EditPage>
  );
};

export default HostEditPage;
