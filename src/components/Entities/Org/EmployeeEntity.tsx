import type { Employee } from '@/services/Org/Employee/data';
import type { EntityField } from '../types';

export const EmployeeEntity: EntityField<Employee>[] = [
  {
    intlId: 'org.employee.personId',
    dataIndex: 'personId',
    inDescription: true,
    inForm: true,
    hidden: true,
  },
  {
    intlId: 'org.employee.employeeNumber',
    dataIndex: 'employeeNumber',
    inDescription: true,
    inForm: true,
  },
  {
    intlId: 'org.employee.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'org.employee.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'org.employee.gender',
    dataIndex: 'gender',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inForm: true,
    fieldType: 'text',
  },
  {
    intlId: 'org.employee.email',
    dataIndex: 'email',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inForm: true,
    fieldType: 'text',
  },
  {
    intlId: 'org.employee.mobile',
    dataIndex: 'mobile',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inForm: true,
    fieldType: 'text',
  },
];
