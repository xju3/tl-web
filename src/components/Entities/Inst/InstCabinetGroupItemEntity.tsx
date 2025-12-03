import type { InstCabinetGroupItem } from '@/services/Inst/Group/data';
import type { EntityField } from '../types';

export const InstCabinetGroupItemEntity: EntityField<InstCabinetGroupItem>[] = [
  {
    dataIndex: 'id',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    intlId: 'device.cabinet.code',
    dataIndex: 'instCabinetCode',
    key: 'instCabinetCode',
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
    dataIndex: 'instCabinetName',
    key: 'instCabinetName',
    sorter: {
      multiple: 3,
    },
    visibility: {
      inTable: true,
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
    intlId: 'common.status',
    dataIndex: 'status',
    key: 'status',
    sorter: {
      multiple: 3,
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
    },
  },
  {
    dataIndex: 'instCabinetGroupId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
