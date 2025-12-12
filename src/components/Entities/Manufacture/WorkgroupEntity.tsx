import type { Workgroup } from '@/services/Manufacture/Workgroup/data';
import type { EntityField } from '../types';

export const WorkgroupEntity: EntityField<Workgroup>[] = [
  {
    dataIndex: 'code',
    intlId: 'workgroup.code',
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
    intlId: 'workgroup.name',
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
      rules: [{ type: 'required' }, { type: 'length', args: [2, 64] }],
    },
  },
  {
    dataIndex: 'comment',
    intlId: 'workgroup.comment',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'textarea',
      formItemProps: {
        width: 'lg',
      },
    },
    column: {
      render: (text) => <div style={{ whiteSpace: 'pre-line' }}>{text}</div>,
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
