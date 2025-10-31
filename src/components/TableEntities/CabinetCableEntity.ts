import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { EntityField } from './types';

export const CabinetCableEntity: EntityField<CabinetCable>[] = [
  {
    intlId: 'device.cabinet.cable.code',
    dataIndex: 'code',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.cable.name',
    dataIndex: 'name',
    inTable: true,
  },
  {
    intlId: 'device.host.code',
    dataIndex: 'hostCode',
    inTable: true,
  },
  {
    intlId: 'device.host.name',
    dataIndex: 'hostName',
    inTable: true,
  },
  {
    intlId: 'device.host.port.code',
    dataIndex: 'hostPortCode',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.cable.description',
    dataIndex: 'description',
    inTable: true,
  },
];
