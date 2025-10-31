import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import PeripheralFormFields from '@/components/FormFields/PeripheralFormFields';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import {
  addPeripheral,
  getPeripheralById,
  updatePeripheral,
} from '@/services/Device/Peripheral/service';

const PeripheralForm: React.FC = () => {
  return <PeripheralFormFields />;
};

const PeripheralEditPage = () => {
  const services = {
    addItem: addPeripheral,
    updateItem: updatePeripheral,
    getItemById: getPeripheralById,
  };

  const backRoute = '/device/peripherals';

  return (
    <EditPage<Peripheral> services={services} backRoute={backRoute}>
      <PeripheralForm />
    </EditPage>
  );
};

export default PeripheralEditPage;
