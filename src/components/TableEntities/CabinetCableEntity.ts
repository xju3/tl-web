import type { CabinetCable } from '@/services/Device/Cabinet/data';
import type { EntityField } from './types';

export const cabinetCableEntity: EntityField<CabinetCable>[] = [
  {
    dataIndex: 'id',
    intlId: 'device.cabinet.cable.id',
    inTable: false,
    inDescription: true,
    inSelector: false,
  },
  {
    dataIndex: 'code',
    intlId: 'device.cabinet.cable.code',
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    dataIndex: 'name',
    intlId: 'device.cabinet.cable.name',
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    dataIndex: 'description',
    intlId: 'device.cabinet.cable.description',
    inTable: false,
    inDescription: true,
    inSelector: false,
  },
  {
    dataIndex: 'createTime',
    intlId: 'common.createTime',
    valueType: 'dateTime',
    inTable: true,
    inDescription: true,
    inSelector: false,
  },
];
