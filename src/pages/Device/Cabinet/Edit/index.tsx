import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import {
  addCabinet,
  getCabinetById,
  updateCabinet,
} from '@/services/Device/Cabinet/service';
import { validationRules } from '@/utils/validation';

const CabinetForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        rules={[
          rules.required('device.cabinet.code'),
          rules.length(2, 16, 'device.cabinet.code'),
        ]}
        bordered={true}
        width={'lg'}
        placeholder={'input code here, max length less than 8'}
        name="code"
        label={intl.formatMessage({ id: 'device.cabinet.code' })}
      />
      <CustomProFormText
        name="name"
        rules={[
          rules.required('device.cabinet.name'),
          rules.length(2, 32, 'device.cabinet.name'),
        ]}
        width={'lg'}
        label={intl.formatMessage({ id: 'device.cabinet.name' })}
      />
      <CustomProFormText width={'lg'} name="parentId" hidden={true} />
    </>
  );
};

const CabinetEditPage = () => {
  const services = {
    addItem: addCabinet,
    updateItem: updateCabinet,
    getItemById: getCabinetById,
  };

  const backRoute = '/device/cabinets';

  return (
    <EditPage<Cabinet> services={services} backRoute={backRoute}>
      <CabinetForm />
    </EditPage>
  );
};

export default CabinetEditPage;
