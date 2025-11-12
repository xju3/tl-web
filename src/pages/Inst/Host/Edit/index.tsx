import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { InstHostEntity } from '@/components/Entities/Inst/InstHostEntity';
import type { InstHost } from '@/services/Inst/Host/data';
import { getInstHostById, updateInstHost } from '@/services/Inst/Host/service';

const InstHostForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<InstHost>(InstHostEntity, intl)}</>;
};

const InstHostEditPage = () => {
  const services = {
    updateItem: updateInstHost,
    getItemById: getInstHostById,
  };

  return (
    <EditPage<InstHost> services={services}>
      <InstHostForm />
    </EditPage>
  );
};

export default InstHostEditPage;
