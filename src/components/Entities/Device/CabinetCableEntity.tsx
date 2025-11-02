import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import HostSelector from '@/components/Selectors/HostSelector';
import HostSerialPortSelector from '@/components/Selectors/HostSerialPortSelector';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { Host, HostSerialPort } from '@/services/Device/Host/data';
import type { EntityField } from '../types';

export const CabinetCableEntity: EntityField<CabinetCable>[] = [
  {
    dataIndex: 'id',
    visibility: {
      inTable: false,
      inDescription: false,
      inForm: true,
      inSelector: false,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'cabinetId',
    visibility: {
      inTable: false,
      inDescription: false,
      inForm: true,
      inSelector: false,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'hostId', // Virtual field for the form
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
  {
    dataIndex: 'hostPortId', // Virtual field for the form
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'code',
    intlId: 'device.cabinet.cable.code',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    dataIndex: 'name',
    intlId: 'device.cabinet.cable.name',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
      formItemProps: {},
    },
  },

  {
    dataIndex: 'hostCode', // Virtual field for the form
    intlId: 'device.host.code', // Not directly used, but good for context
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Host>
          nameFieldName="hostCode"
          labelIntl="device.host.name"
          width={'lg'}
          SelectorModal={HostSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              hostId: entity.id,
              hostCode: entity.code,
              hostName: entity.name,
            });
          }}
        />
      ),
    },
  },
  {
    dataIndex: 'hostName', // Virtual field for the form
    intlId: 'device.host.name', // Not directly used, but good for context
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        disabled: true,
      },
    },
  },
  {
    dataIndex: 'hostPortCode',
    intlId: 'device.host.port.code',
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<HostSerialPort>
          nameFieldName="hostPortCode"
          labelIntl="device.host.port.code"
          width={'lg'}
          selectorProps={(dependencies: Record<string, any>) => ({
            hostId: dependencies.hostId,
          })}
          SelectorModal={HostSerialPortSelector}
          formDependencies={['hostId']}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              hostPortId: entity.id,
              hostPortCode: entity.portCode,
            });
          }}
        />
      ),
    },
  },

  {
    dataIndex: 'description',
    intlId: 'device.cabinet.cable.description',
    visibility: {
      inTable: false,
      inDescription: true,
      inSelector: false,
      inForm: true,
    },
    form: {
      fieldType: 'textarea',
    },
  },
];
