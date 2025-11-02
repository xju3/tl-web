import { useIntl } from '@@/exports';
import type { ProFormInstance } from '@ant-design/pro-components';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { HostSerialPortEntity } from '@/components/Entities/Device/HostSerialPortEntity';
import type { HostSerialPort } from '@/services/Device/Host/data';
import {
  addHostPort,
  getHostPortById,
  updateHostPort,
} from '@/services/Device/Host/service';
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
    addItem: addHostPort,
    updateItem: updateHostPort,
    getItemById: getHostPortById,
  };

  return (
    <EditPage<HostSerialPort> services={services}>
      <HostSerialPortForm />
    </EditPage>
  );
};

export default HostSerialPortEditPage;
