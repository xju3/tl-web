import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { WorkshopEntity } from '@/components/Entities/Manufacture/WorkshopEntity';
import type { Workshop } from '@/services/Manufacture/Workshop/data';
import {
  createWorkshop,
  getWorkshopById,
  updateWorkshop,
} from '@/services/Manufacture/Workshop/service';

const WorkshopForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Workshop>(WorkshopEntity, intl)}</>;
};

const WorkshopEditPage = () => {
  const services = {
    addItem: createWorkshop,
    updateItem: updateWorkshop,
    getItemById: getWorkshopById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<Workshop> services={services} backRoute={backRoute}>
      <WorkshopForm />
    </EditPage>
  );
};

export default WorkshopEditPage;
