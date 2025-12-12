import type { Department } from '@/services/Org/Department/data';
import type { EntityField } from '../types';

export const DepartmentEntity: EntityField<Department>[] = [
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
  {
    intlId: 'org.department.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inDescription: false,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'org.department.comment',
    dataIndex: 'comment',
    valueType: 'textarea',
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
      fieldType: 'textarea',
    },
  },
  {
    dataIndex: 'parentId',
    visibility: {
      inDescription: false,
      inForm: false,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'partnerId',
    visibility: {
      inDescription: false,
      inForm: false,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'id',
    visibility: {
      inDescription: false,
      inForm: false,
    },
    form: {
      hidden: true,
    },
  },
];
