import type { Cabinet } from '@/services/Device/Cabinet/data';
import type { EntityField } from '../types';

export const CabinetEntity: EntityField<Cabinet>[] = [
  {
    dataIndex: 'id',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    intlId: 'device.cabinet.code',
    dataIndex: 'code',
    key: 'code',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    width: 160,
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'device.cabinet.name',
    dataIndex: 'name',
    key: 'name',
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
    intlId: 'device.cabinet.description',
    dataIndex: 'description',
    key: 'description',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'textarea',
    },
  },
  {
    dataIndex: 'parentId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
