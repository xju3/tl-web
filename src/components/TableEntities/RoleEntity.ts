import type { Role } from '@/services/Sys/Role/data';
import type { EntityField } from './types';

export const RoleEntity: EntityField<Role>[] = [
  {
    intlId: 'page.sys.role.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'page.sys.role.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
];
