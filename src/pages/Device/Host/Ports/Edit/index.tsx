import { useIntl } from '@@/exports';
import type { ProFormInstance } from '@ant-design/pro-components';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { HostSerialPortEntity } from '@/components/Entities/HostSerialPortEntity';
import type { HostSerialPort } from '@/services/Device/Host/data';
import {
  addSerialPort,
  getSerialPortById,
  updateSerialPort,
} from '@/services/Device/SerialPort/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<HostSerialPort>>;
}

const HostSerialPortForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>{buildFormFields<HostSerialPort>(HostSerialPortEntity, intl, formRef)}</>
  );
};

const HostSerialPortEditPage = () => {
  const services = {
    addItem: addSerialPort,
    updateItem: updateSerialPort,
    getItemById: getSerialPortById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<HostSerialPort> services={services} backRoute={backRoute}>
      <HostSerialPortForm />
    </EditPage>
  );
};

export default HostSerialPortEditPage;
