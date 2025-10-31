import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import PartnerFormFields from '@/components/FormFields/PartnerFormFields';
import type { Partner } from '@/services/Org/Partner/data';
import {
  createPartner,
  getPartner,
  updatePartner,
} from '@/services/Org/Partner/service';

const PartnerForm: React.FC = () => {
  return <PartnerFormFields />;
};

const PartnerEditPage = () => {
  const services = {
    addItem: createPartner,
    updateItem: updatePartner,
    getItemById: getPartner,
  };

  const backRoute = '/org/partner';

  return (
    <EditPage<Partner> services={services} backRoute={backRoute}>
      <PartnerForm />
    </EditPage>
  );
};

export default PartnerEditPage;
