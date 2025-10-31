import type { Peripheral } from '@/services/Device/Peripheral/data';
import type { EntityField } from './types';

export const PeripheralEntity: EntityField<Peripheral>[] = [
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'name',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'device.peripheral.type',
    dataIndex: 'type',
    sorter: {
      multiple: 3,
    },
    inTable: true,
  },
];
