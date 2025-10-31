import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CabinetFormFields from '@/components/FormFields/CabinetFormFields';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import {
  addCabinet,
  getCabinetById,
  updateCabinet,
} from '@/services/Device/Cabinet/service';

const CabinetForm: React.FC = () => {
  return <CabinetFormFields />;
};

const CabinetEditPage = () => {
  const services = {
    addItem: addCabinet,
    updateItem: updateCabinet,
    getItemById: getCabinetById,
  };

  const backRoute = '/device/cabinets';

  return (
    <EditPage<Cabinet> services={services} backRoute={backRoute}>
      <CabinetForm />
    </EditPage>
  );
};

export default CabinetEditPage;
