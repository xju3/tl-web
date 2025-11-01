import {
  ProFormDependency,
  type ProFormInstance,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import HostSelectModal from '@/components/Selectors/HostSelectModal';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { HostSerialPort } from '@/services/Device/Host/data';
import { getHostPorts } from '@/services/Device/Host/service';
import type { EntityField } from './types';

const HostSelectorFormItem: React.FC<{
  form: ProFormInstance;
}> = ({ form }) => {
  const [hostSelectModalOpen, setHostSelectModalOpen] = useState(false);
  const intl = useIntl();

  return (
    <React.Fragment>
      <ProFormText
        name="hostName"
        label={intl.formatMessage({ id: 'device.host.name' })}
        disabled
      />
      <Button onClick={() => setHostSelectModalOpen(true)}>
        {intl.formatMessage({ id: 'common.actions.select' })}
      </Button>
      <ProFormDependency name={['hostId']}>
        {({ hostId }) => {
          if (!hostId) return null;

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
                }));
              }}
              onChange={(value, option: any) => {
                // 同步更新 hostPortCode
                form?.setFieldValue('hostPortCode', option?.label);
              }}
            />
          );
        }}
      </ProFormDependency>
      <ProFormText name="hostId" hidden />
      <ProFormText name="hostCode" hidden />
      <ProFormText name="hostPortCode" hidden />

      <HostSelectModal
        open={hostSelectModalOpen}
        onCancel={() => setHostSelectModalOpen(false)}
        onSelect={(host) => {
          console.log(form);
          if (form) {
            form.setFieldsValue({
              hostId: host.id,
              hostCode: host.code,
              hostName: host.name,
              hostPortId: undefined,
              hostPortCode: undefined,
            });
          }
          setHostSelectModalOpen(false);
        }}
      />
    </React.Fragment>
  );
};

export const CabinetCableEntity: EntityField<CabinetCable>[] = [
  {
    dataIndex: 'id',
    intlId: 'device.cabinet.cable.id',
    inTable: false,
    inDescription: true,
    inSelector: false,
  },
  {
    dataIndex: 'code',
    intlId: 'device.cabinet.cable.code',
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    dataIndex: 'name',
    intlId: 'device.cabinet.cable.name',
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },

  {
    dataIndex: 'hostCode', // Virtual field for the form
    intlId: 'device.host.code', // Not directly used, but good for context
    inForm: true,
    fieldType: 'text',
  },
  {
    dataIndex: 'hostName', // Virtual field for the form
    intlId: 'device.host.name', // Not directly used, but good for context
    inForm: true,
    fieldType: 'custom',
    renderFormItem: () => {
      return (
        <ProFormDependency name={[]}>
          {(_, form) => <HostSelectorFormItem form={form} />}
        </ProFormDependency>
      );
    },
  },
  {
    dataIndex: 'description',
    intlId: 'device.cabinet.cable.description',
    inTable: false,
    inDescription: true,
    inSelector: false,
    inForm: true,
    fieldType: 'textarea',
  },
];
