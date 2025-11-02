import type { User } from '@/services/Sys/User/data';
import type { EntityField } from '../types';

export const UserEntity: EntityField<User>[] = [
  {
    intlId: 'sys.user.username',
    dataIndex: 'username',
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'sys.user.employeeId',
    dataIndex: 'employeeId',
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'sys.user.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.user.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
];
