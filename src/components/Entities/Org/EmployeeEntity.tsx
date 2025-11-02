import type { Employee } from '@/services/Org/Employee/data';
import type { EntityField } from '../types';

export const EmployeeEntity: EntityField<Employee>[] = [
  {
    intlId: 'org.employee.personId',
    dataIndex: 'personId',
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'org.employee.employeeNumber',
    dataIndex: 'employeeNumber',
    visibility: {
      inDescription: true,
      inForm: true,
    },
  },
  {
    intlId: 'org.employee.code',
    dataIndex: 'code',
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
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'org.employee.name',
    dataIndex: 'name',
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
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'org.employee.gender',
    dataIndex: 'gender',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
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
    },
    form: {
      fieldType: 'text',
    },
  },
];
