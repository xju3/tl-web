import { useIntl } from '@umijs/max';
import React from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import { validationRules } from '@/utils/validation';

const CabinetFormFields: React.FC = () => {
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

export default CabinetFormFields;
