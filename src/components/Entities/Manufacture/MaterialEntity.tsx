import type { Material } from '@/services/Manufacture/Material/data';
import type { EntityField } from '../types';

export const MaterialEntity: EntityField<Material>[] = [
  {
    dataIndex: 'code',
    intlId: 'material.code',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
        placeholder: 'input code here, max length less than 8',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 16] }],
    },
  },
  {
    dataIndex: 'name',
    intlId: 'material.name',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
    },
  },
  {
    dataIndex: 'comment',
    intlId: 'material.comment',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
    },
  },
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
    dataIndex: 'partnerId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'parentId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
