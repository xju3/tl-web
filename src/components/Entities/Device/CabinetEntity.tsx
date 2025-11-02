import type { Cabinet } from '@/services/Device/Cabinet/data';
import type { EntityField } from '../types';

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
    inForm: true,
    width: 160,
    fieldType: 'text',
    rules: [{ type: 'required' }],
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
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'device.cabinet.description',
    dataIndex: 'description',
    key: 'description',
    inTable: true,
    inForm: true,
    fieldType: 'textarea',
  },
];
