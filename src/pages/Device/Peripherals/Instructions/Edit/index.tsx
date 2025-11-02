import {
  PageContainer,
  ProForm,
  type ProFormInstance,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Card, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid_v4 } from 'uuid';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { HostSerialPortEntity } from '@/components/Entities/Device/HostSerialPortEntity';
import { PeripheralInstructionEntity } from '@/components/Entities/Device/PeripheralInstructionEntity';
import PeripheralInstructionFormFields from '@/components/FormFields/PeripheralInstructionFormFields';
import type { HostSerialPort } from '@/services/Device/Host/data';
import type {
  Instruction,
  Peripheral,
} from '@/services/Device/Peripheral/data';
import {
  addInstruction,
  deleteInstruction,
  getInstructionById,
  updateInstruction,
} from '@/services/Device/Peripheral/service';
import {
  addSerialPort,
  getSerialPortById,
  updateSerialPort,
} from '@/services/Device/SerialPort/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<Instruction>>;
}

const PeripheralInstructionForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>
      {buildFormFields<Instruction>(PeripheralInstructionEntity, intl, formRef)}
    </>
  );
};

const PeripheralInstructionPage = () => {
  const services = {
    addItem: addInstruction,
    updateItem: updateInstruction,
    getItemById: getInstructionById,
  };

  const backRoute = '/device/peripherals/view/:id';

  return (
    <EditPage<Instruction> services={services} backRoute={backRoute}>
      <PeripheralInstructionForm />
    </EditPage>
  );
};

export default PeripheralInstructionPage;
