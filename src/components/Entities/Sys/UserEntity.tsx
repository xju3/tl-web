import type { User } from '@/services/Sys/User/data';
import type { EntityField } from '../types';

export const UserEntity: EntityField<User>[] = [
  {
    intlId: 'sys.user.username',
    dataIndex: 'username',
    inDescription: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'sys.user.employeeId',
    dataIndex: 'employeeId',
    inDescription: true,
    inForm: true,
    hidden: true,
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
    inForm: true,
    fieldType: 'text',
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
    inForm: true,
    fieldType: 'text',
  },
];
