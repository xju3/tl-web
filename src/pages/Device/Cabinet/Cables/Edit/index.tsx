import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { CabinetCableEntity } from '@/components/Entities/Device/CabinetCableEntity';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import {
  addCabinetCables,
  getCabinetCableById,
  updateCabinetCables,
} from '@/services/Device/Cabinet/service';

interface CableFormProps {
  formRef?: React.RefObject<ProFormInstance<CabinetCable>>;
}

const CableForm: React.FC<CableFormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>{buildFormFields<CabinetCable>(CabinetCableEntity, intl, formRef)}</>
  );
};

const CableEditPage: React.FC = () => {
  const services = {
    addItem: addCabinetCables,
    updateItem: updateCabinetCables,
    getItemById: getCabinetCableById,
  };

  return (
    <EditPage<CabinetCable> services={services}>
      <CableForm />
    </EditPage>
  );
};

export default CableEditPage;
