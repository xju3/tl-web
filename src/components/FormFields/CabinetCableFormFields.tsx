import {
  ProFormDependency,
  type ProFormInstance,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import React, { useState } from 'react';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import HostSelector from '@/components/Selectors/HostSelector';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { HostSerialPort } from '@/services/Device/Host/data';
import { getHostPorts } from '@/services/Device/Host/service';
import { validationRules } from '@/utils/validation';

interface CabinetCableFormFieldsProps {
  formRef?: React.RefObject<ProFormInstance<CabinetCable>>;
}

const CabinetCableFormFields: React.FC<CabinetCableFormFieldsProps> = ({
  formRef,
}) => {
  const intl = useIntl();
  const rules = validationRules(intl);
  const [hostSelectModalOpen, setHostSelectModalOpen] = useState(false);

  return (
    <>
      <CustomProFormText
        name="code"
        label={intl.formatMessage({ id: 'device.cabinet.cable.code' })}
        rules={[rules.required('device.cabinet.cable.code')]}
      />
      <CustomProFormText
        name="name"
        label={intl.formatMessage({ id: 'device.cabinet.cable.name' })}
        rules={[rules.required('device.cabinet.cable.name')]}
      />
      <ProFormTextArea
        name="description"
        label={intl.formatMessage({
          id: 'device.cabinet.cable.description',
        })}
      />
      <ProFormText
        name="hostName"
        label={intl.formatMessage({ id: 'device.host.name' })}
        disabled
      />
      <Button
        onClick={() => {
          setHostSelectModalOpen(true);
        }}
      >
        {intl.formatMessage({ id: 'common.actions.select' })}
      </Button>
      <ProFormDependency name={['hostId']}>
        {({ hostId }) => {
          if (!hostId) {
            return null;
          }
          return (
            <ProFormSelect
              name="hostPortId"
              label={intl.formatMessage({ id: 'device.host.port.code' })}
              request={async () => {
                const res = await getHostPorts(hostId, {
                  currPage: 1,
                  pageSize: 1000,
                });
                return res.data.map((item: HostSerialPort) => ({
                  label: item.code,
                  value: item.id,
                  hostPortCode: item.code,
                }));
              }}
            />
          );
        }}
      </ProFormDependency>
      <ProFormText name="hostId" hidden />
      <ProFormText name="hostCode" hidden />
      <ProFormText name="hostPortCode" hidden />

      <HostSelector
        open={hostSelectModalOpen}
        onCancel={() => setHostSelectModalOpen(false)}
        onSelect={(host) => {
          formRef?.current?.setFieldsValue({
            hostId: host.id,
            hostCode: host.code,
            hostName: host.name,
            hostPortId: undefined,
            hostPortCode: undefined,
          });
          setHostSelectModalOpen(false);
        }}
      />
    </>
  );
};

export default CabinetCableFormFields;
