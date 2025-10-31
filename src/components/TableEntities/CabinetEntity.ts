import type { Cabinet } from '@/services/Device/Cabinet/data';
import type { EntityField } from './types';

export const CabinetEntity: EntityField<Cabinet>[] = [
  {
    intlId: 'device.cabinet.code',
    dataIndex: 'code',
    key: 'code',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'device.cabinet.name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'device.cabinet.description',
    dataIndex: 'description',
    key: 'description',
    inTable: true,
  },
];
