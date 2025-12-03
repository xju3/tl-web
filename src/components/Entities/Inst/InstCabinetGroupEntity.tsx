import type { InstCabinetGroup } from '@/services/Inst/Group/data';
import type { EntityField } from '../types';

export const InstCabinetGroupEntity: EntityField<InstCabinetGroup>[] = [
  {
    dataIndex: 'id',
    visibility: { inForm: true },
    form: { hidden: true },
  },

  {
    intlId: 'inst.cabinet.group.code',
    dataIndex: 'code',
    key: 'cabinetGroupCode',
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
    intlId: 'inst.cabinet.group.name',
    dataIndex: 'name',
    key: 'cabinetGroupName',
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
    intlId: 'inst.cabinet.group.description',
    dataIndex: 'description',
    key: 'cabinetGroupDescription',
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
    dataIndex: 'partnerId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
