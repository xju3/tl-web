import type { Department } from '@/services/Org/Department/data';
import type { EntityField } from './types';

export const DepartmentEntity: EntityField<Department>[] = [
  {
    intlId: 'org.department.parentId',
    dataIndex: 'parentId',
    inDescription: true,
    inForm: true,
    hidden: true,
  },
  {
    intlId: 'org.department.companyId',
    dataIndex: 'companyId',
    inDescription: true,
    inForm: true,
    hidden: true,
  },
  {
    intlId: 'org.department.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'org.department.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
];
