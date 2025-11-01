import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/TableEntities/Builder';
import { TenantEntity } from '@/components/TableEntities/TenantEntity';
import type { Tenant } from '@/services/Org/Tenant/data';
import {
  createTenant,
  getTenantById,
  updateTenant,
} from '@/services/Org/Tenant/service';

const TenantForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Tenant>(TenantEntity, intl)}</>;
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
