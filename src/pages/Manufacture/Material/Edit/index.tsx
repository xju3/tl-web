import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { MaterialEntity } from '@/components/Entities/Manufacture/MaterialEntity';
import type { Material } from '@/services/Manufacture/Material/data';
import {
  createMaterial,
  getMaterialById,
  updateMaterial,
} from '@/services/Manufacture/Material/service';

const MaterialForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Material>(MaterialEntity, intl)}</>;
};

const MaterialEditPage = () => {
  const services = {
    addItem: createMaterial,
    updateItem: updateMaterial,
    getItemById: getMaterialById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<Material> services={services} backRoute={backRoute}>
      <MaterialForm />
    </EditPage>
  );
};

export default MaterialEditPage;
