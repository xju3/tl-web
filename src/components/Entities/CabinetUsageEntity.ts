import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import type { EntityField } from './types';

export const CabinetUsageEntity: EntityField<CabinetPeripheralUsage>[] = [
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'peripheralCode',
    inTable: true,
    inForm: true,
    fieldType: 'custom',
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'peripheralName',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.usage.sequence',
    dataIndex: 'sequence',
    inTable: true,
    inForm: true,
    fieldType: 'digit',
  },
  {
    intlId: 'device.cabinet.usage.sequence',
    dataIndex: 'sequence',
    inTable: true,
    inForm: true,
    fieldType: 'digit',
  },
];
