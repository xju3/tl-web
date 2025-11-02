import type { Department } from '@/services/Org/Department/data';
import type { EntityField } from '../types';

export const DepartmentEntity: EntityField<Department>[] = [
  {
    intlId: 'org.department.parentId',
    dataIndex: 'parentId',
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'org.department.companyId',
    dataIndex: 'companyId',
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'org.department.name',
    dataIndex: 'name',
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
    intlId: 'org.department.code',
    dataIndex: 'code',
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
