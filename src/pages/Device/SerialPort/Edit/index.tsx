import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { SerialPortEntity } from '@/components/Entities/Device/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  addSerialPort,
  getSerialPortById,
  updateSerialPort,
} from '@/services/Device/SerialPort/service';

const SerialPortForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<SerialPort>(SerialPortEntity, intl)}</>;
};

const SerialPortEditPage = () => {
  const services = {
    addItem: addSerialPort,
    updateItem: updateSerialPort,
    getItemById: getSerialPortById,
  };

  const backRoute = '/device/serial-ports';

  return (
    <EditPage<SerialPort> services={services} backRoute={backRoute}>
      <SerialPortForm />
    </EditPage>
  );
};

export default SerialPortEditPage;
