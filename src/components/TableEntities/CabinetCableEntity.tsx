import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import HostSelectModal from '@/components/Selectors/HostSelectModal';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { Host } from '@/services/Device/Host/data';
import type { EntityField } from './types';

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
    renderFormItem: () => (
      <EntitySelectorFormItem<Host>
        nameFieldName="hostName"
        labelIntl="device.host.name"
        SelectorModal={HostSelectModal}
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
