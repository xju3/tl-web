import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { PartnerEntity } from '@/components/Entities/Org/PartnerEntity';
import type { Partner } from '@/services/Org/Partner/data';
import {
  createPartner,
  getPartner,
  updatePartner,
} from '@/services/Org/Partner/service';

const PartnerForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Partner>(PartnerEntity, intl)}</>;
};

const PartnerEditPage = () => {
  const services = {
    addItem: createPartner,
    updateItem: updatePartner,
    getItemById: getPartner,
  };

  return (
    <EditPage<Partner> services={services}>
      <PartnerForm />
    </EditPage>
  );
};

export default PartnerEditPage;
