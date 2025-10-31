import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/CommonPages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import {
  addPeripheral,
  getPeripheralById,
  updatePeripheral,
} from '@/services/Device/Peripheral/service';
import { validationRules } from '@/utils/validation';

const PeripheralForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="code"
        label={intl.formatMessage({ id: 'device.peripheral.code' })}
        rules={[
          rules.required('device.peripheral.code'),
          rules.length(2, 16, 'device.peripheral.code'),
        ]}
      />
      <CustomProFormText
        name="name"
        label={intl.formatMessage({ id: 'device.peripheral.name' })}
        rules={[
          rules.required('device.peripheral.name'),
          rules.length(2, 32, 'device.peripheral.name'),
        ]}
      />
    </>
  );
};

const PeripheralEditPage = () => {
  const services = {
    addItem: addPeripheral,
    updateItem: updatePeripheral,
    getItemById: getPeripheralById,
  };

  const backRoute = '/device/peripherals';

  return (
    <EditPage<Peripheral> services={services} backRoute={backRoute}>
      <PeripheralForm />
    </EditPage>
  );
};

export default PeripheralEditPage;
