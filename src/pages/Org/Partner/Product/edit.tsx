import { useIntl } from '@@/exports';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { PartnerProductEntity } from '@/components/Entities/Org/PartnerProductEntity';
import type { PartnerProduct } from '@/services/Org/Partner/data';
import {
  createPartnerProduct,
  getPartnerProductById,
  updatePartnerProduct,
} from '@/services/Org/Partner/service';

const PartnerProductForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<PartnerProduct>(PartnerProductEntity, intl)}</>;
};

const PartnerProductEditPage = () => {
  const services = {
    addItem: createPartnerProduct,
    updateItem: updatePartnerProduct,
    getItemById: getPartnerProductById,
  };

  const backRoute = '/org/employee';

  return (
    <EditPage<PartnerProduct> services={services} backRoute={backRoute}>
      <PartnerProductForm />
    </EditPage>
  );
};

export default PartnerProductEditPage;
