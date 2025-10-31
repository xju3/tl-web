import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Host } from '@/services/Device/Host/data';
import {
  addHost,
  getHostById,
  updateHost,
} from '@/services/Device/Host/service';
import { validationRules } from '@/utils/validation';

const HostForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        rules={[
          rules.required('device.host.code'),
          rules.length(2, 8, 'device.host.code'),
        ]}
        bordered={true}
        width={'lg'}
        placeholder={'input code here, max length less than 8'}
        name="code"
        label={intl.formatMessage({ id: 'device.host.code' })}
      />
      <CustomProFormText
        name="name"
        rules={[
          rules.required('device.host.name'),
          rules.length(2, 32, 'device.host.name'),
        ]}
        width={'lg'}
        label={intl.formatMessage({ id: 'device.host.name' })}
      />
      <CustomProFormText
        width={'lg'}
        name="ip"
        label={intl.formatMessage({ id: 'common.ip' })}
        rules={[rules.ip('common.ip')]}
      />
    </>
  );
};

const HostEditPage = () => {
  const services = {
    addItem: addHost,
    updateItem: updateHost,
    getItemById: getHostById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<Host> services={services} backRoute={backRoute}>
      <HostForm />
    </EditPage>
  );
};

export default HostEditPage;
