import type { User } from '@/services/Sys/User/data';
import type { EntityField } from './types';

export const UserEntity: EntityField<User>[] = [
  {
    intlId: 'sys.user.username',
    dataIndex: 'username',
    inDescription: true,
  },
  {
    intlId: 'sys.user.employeeId',
    dataIndex: 'employeeId',
    inDescription: true,
  },
  {
    intlId: 'sys.user.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inSelector: true,
  },
  {
    intlId: 'sys.user.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inSelector: true,
  },
];
