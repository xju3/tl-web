import { ProFormSwitch } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Partner } from '@/services/Org/Partner/data';
import {
  createPartner,
  getPartner,
  updatePartner,
} from '@/services/Org/Partner/service';
import { validationRules } from '@/utils/validation';

const PartnerForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="code"
        rules={[rules.required('tenant.partner.code')]}
        label={intl.formatMessage({ id: 'tenant.partner.code' })}
      />
      <CustomProFormText
        name="name"
        rules={[rules.required('tenant.partner.name')]}
        label={intl.formatMessage({ id: 'tenant.partner.name' })}
      />
      <CustomProFormText
        name="address"
        label={intl.formatMessage({ id: 'tenant.partner.address' })}
      />
      <ProFormSwitch
        name="tenant"
        label={intl.formatMessage({ id: 'tenant.partner.tenant' })}
      />
    </>
  );
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
