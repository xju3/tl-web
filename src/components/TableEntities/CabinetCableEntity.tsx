import {
  ProFormDependency,
  type ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import HostSelectModal from '@/components/Selectors/HostSelectModal';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
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

      <HostSelectModal
        open={hostSelectModalOpen}
        onCancel={() => setHostSelectModalOpen(false)}
        onSelect={(host) => {
          if (form) {
            form.setFieldsValue({
              hostId: host.id,
              hostCode: host.code,
              hostName: host.name,
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
    inTable: false,
    inDescription: false,
    inForm: true,
    hidden: true,
    inSelector: false,
  },
  {
    dataIndex: 'cabinetId',
    inForm: true,
    inTable: false,
    inDescription: false,
    hidden: true,
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
    dataIndex: 'hostId', // Virtual field for the form
    inForm: true,
    fieldType: 'text',
    hidden: true,
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
