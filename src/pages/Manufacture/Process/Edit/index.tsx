import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { ProcessEntity } from '@/components/Entities/Manufacture/ProcessEntity';
import type { Process } from '@/services/Manufacture/Process/data';
import {
  createProcess,
  getProcessById,
  updateProcess,
} from '@/services/Manufacture/Process/service';

const ProcessForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Process>(ProcessEntity, intl)}</>;
};

const ProcessEditPage = () => {
  const services = {
    addItem: createProcess,
    updateItem: updateProcess,
    getItemById: getProcessById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<Process> services={services} backRoute={backRoute}>
      <ProcessForm />
    </EditPage>
  );
};

export default ProcessEditPage;
