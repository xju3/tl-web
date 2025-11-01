import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/TableEntities/Builder';
import { CabinetEntity } from '@/components/TableEntities/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import {
  addCabinet,
  getCabinetById,
  updateCabinet,
} from '@/services/Device/Cabinet/service';

const CabinetForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Cabinet>(CabinetEntity, intl)}</>;
};

const CabinetEditPage = () => {
  const services = {
    addItem: addCabinet,
    updateItem: updateCabinet,
    getItemById: getCabinetById,
  };

  const backRoute = '/device/cabinets';

  return (
    <EditPage<Cabinet> services={services} backRoute={backRoute}>
      <CabinetForm />
    </EditPage>
  );
};

export default CabinetEditPage;
