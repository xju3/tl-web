import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import type { EntityField } from './types';

export const CabinetPeripheralEntity: EntityField<CabinetPeripheral>[] = [
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'code',
    inTable: true,
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'name',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.cable.code',
    dataIndex: 'cableCode',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.cable.name',
    dataIndex: 'cableName',
    inTable: true,
  },
  {
    intlId: 'device.peripheral.quantity',
    dataIndex: 'quantity',
    inTable: true,
  },
];
