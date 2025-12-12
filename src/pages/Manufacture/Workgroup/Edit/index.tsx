import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { WorkgroupEntity } from '@/components/Entities/Manufacture/WorkgroupEntity';
import type { Workgroup } from '@/services/Manufacture/Workgroup/data';
import {
  createWorkgroup,
  getWorkgroupById,
  updateWorkgroup,
} from '@/services/Manufacture/Workgroup/service';

const WorkgroupForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Workgroup>(WorkgroupEntity, intl)}</>;
};

const WorkgroupEditPage = () => {
  const services = {
    addItem: createWorkgroup,
    updateItem: updateWorkgroup,
    getItemById: getWorkgroupById,
  };

  const backRoute = '/manufacture/workgroups';

  return (
    <EditPage<Workgroup> services={services} backRoute={backRoute}>
      <WorkgroupForm />
    </EditPage>
  );
};

export default WorkgroupEditPage;
