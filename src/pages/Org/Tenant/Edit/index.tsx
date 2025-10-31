import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import TenantFormFields from '@/components/FormFields/TenantFormFields';
import type { Tenant } from '@/services/Org/Tenant/data';
import {
  createTenant,
  getTenantById,
  updateTenant,
} from '@/services/Org/Tenant/service';

const TenantForm: React.FC = () => {
  return <TenantFormFields />;
};

const TenantEditPage = () => {
  const services = {
    addItem: createTenant,
    updateItem: updateTenant,
    getItemById: getTenantById,
  };

  const backRoute = '/org/tenant';

  return (
    <EditPage<Tenant> services={services} backRoute={backRoute}>
      <TenantForm />
    </EditPage>
  );
};

export default TenantEditPage;
