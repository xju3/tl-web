import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { PeripheralInstructionEntity } from '@/components/Entities/Device/PeripheralInstructionEntity';
import type { Instruction } from '@/services/Device/Peripheral/data';
import {
  addInstruction,
  getInstructionById,
  updateInstruction,
} from '@/services/Device/Peripheral/service';

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
