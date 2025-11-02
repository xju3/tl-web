import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import type { EntityField } from '../types';

export const CabinetUsageEntity: EntityField<CabinetPeripheralUsage>[] = [
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'peripheralCode',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'custom',
    },
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'peripheralName',
    visibility: {
      inTable: true,
    },
  },
  {
    intlId: 'device.cabinet.usage.sequence',
    dataIndex: 'sequence',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
  {
    intlId: 'device.cabinet.usage.sequence',
    dataIndex: 'sequence',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
];
