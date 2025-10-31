import type { ProFormInstance } from '@ant-design/pro-components';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CabinetCableFormFields from '@/components/FormFields/CabinetCableFormFields';
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
  return <CabinetCableFormFields formRef={formRef} />;
};

const CableEditPage: React.FC = () => {
  const services = {
    addItem: addCabinetCables,
    updateItem: updateCabinetCables,
    getItemById: getCabinetCableById,
  };

  const backRoute = '/device/cabinets';

  return (
    <EditPage<CabinetCable> services={services} backRoute={backRoute}>
      <CableForm />
    </EditPage>
  );
};

export default CableEditPage;
