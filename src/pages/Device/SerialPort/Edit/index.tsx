import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import SerialPortFormFields from '@/components/FormFields/SerialPortFormFields';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  addSerialPort,
  getSerialPortById,
  updateSerialPort,
} from '@/services/Device/SerialPort/service';

const SerialPortForm: React.FC = () => {
  return <SerialPortFormFields />;
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
