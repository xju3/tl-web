import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import HostSelector from '@/components/Selectors/HostSelector';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { Host } from '@/services/Device/Host/data';
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
    dataIndex: 'hostCode', // Virtual field for the form
    intlId: 'device.host.code', // Not directly used, but good for context
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    dataIndex: 'hostName', // Virtual field for the form
    intlId: 'device.host.name', // Not directly used, but good for context
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Host>
          nameFieldName="hostName"
          labelIntl="device.host.name"
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
