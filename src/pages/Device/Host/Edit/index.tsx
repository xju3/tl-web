import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import HostFormFields from '@/components/FormFields/HostFormFields';
import type { Host } from '@/services/Device/Host/data';
import {
  addHost,
  getHostById,
  updateHost,
} from '@/services/Device/Host/service';

const HostForm: React.FC = () => {
  return <HostFormFields />;
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
