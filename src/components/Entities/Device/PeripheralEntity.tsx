import type { Peripheral } from '@/services/Device/Peripheral/data';
import type { EntityField } from '../types';

export const PeripheralEntity: EntityField<Peripheral>[] = [
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
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
    intlId: 'device.peripheral.name',
    dataIndex: 'name',
    sorter: {
      multiple: 2,
    },
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
    intlId: 'device.peripheral.type',
    dataIndex: 'type',
    sorter: {
      multiple: 3,
    },
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
];
