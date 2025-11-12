import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { InstCabinetEntity } from '@/components/Entities/Inst/InstCabinetEntity';
import type { InstCabinet } from '@/services/Inst/Cabinet/data';
import {
  createInstCabinet,
  getInstCabinetById,
  updateInstCabinetBasicInfo,
} from '@/services/Inst/Cabinet/service';

const InstCabinetForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<InstCabinet>(InstCabinetEntity, intl)}</>;
};

const InstCabinetEditPage = () => {
  const services = {
    addItem: createInstCabinet,
    updateItem: updateInstCabinetBasicInfo,
    getItemById: getInstCabinetById,
  };

  const backRoute = '/inst/cabinets';

  return (
    <EditPage<InstCabinet> services={services} backRoute={backRoute}>
      <InstCabinetForm />
    </EditPage>
  );
};

export default InstCabinetEditPage;
