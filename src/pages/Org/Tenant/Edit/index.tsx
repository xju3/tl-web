import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/CommonPages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Tenant } from '@/services/Org/Tenant/data';
import {
  createTenant,
  getTenantById,
  updateTenant,
} from '@/services/Org/Tenant/service';
import { validationRules } from '@/utils/validation';

const TenantForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="name"
        rules={[rules.required('page.org.tenant.name')]}
        label={intl.formatMessage({ id: 'page.org.tenant.name' })}
      />
      <CustomProFormText
        name="code"
        rules={[rules.required('page.org.tenant.code')]}
        label={intl.formatMessage({ id: 'page.org.tenant.code' })}
      />
    </>
  );
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
