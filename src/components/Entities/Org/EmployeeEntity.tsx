import type { Employee } from '@/services/Org/Employee/data';
import type { EntityField } from '../types';

export const EmployeeEntity: EntityField<Employee>[] = [
  {
    dataIndex: 'id',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'org.employee.code',
    dataIndex: 'code',
    visibility: {
      inDescription: true,
      inForm: true,
      inTable: true,
    },
  },
  {
    intlId: 'org.employee.fullname',
    dataIndex: 'fullName',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inDescription: false,
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'org.employee.gender',
    dataIndex: 'gender',
    valueType: 'text',
    valueEnum: {
      0: 'Female',
      1: 'Male',
    },
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'org.employee.email',
    dataIndex: 'email',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'org.employee.mobile',
    dataIndex: 'mobile',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    form: {
      fieldType: 'text',
    },
  },
];
