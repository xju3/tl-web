import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { PeripheralEntity } from '@/components/Entities/PeripheralEntity';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import {
  addPeripheral,
  getPeripheralById,
  updatePeripheral,
} from '@/services/Device/Peripheral/service';

const PeripheralForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Peripheral>(PeripheralEntity, intl)}</>;
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
