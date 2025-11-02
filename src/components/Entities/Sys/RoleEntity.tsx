import type { Role } from '@/services/Sys/Role/data';
import type { EntityField } from '../types';

export const RoleEntity: EntityField<Role>[] = [
  {
    intlId: 'sys.role.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
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
    intlId: 'sys.role.name',
    dataIndex: 'name',
    valueType: 'text',
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
];
