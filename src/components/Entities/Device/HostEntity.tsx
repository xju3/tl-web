import type { Host } from '@/services/Device/Host/data';
import type { EntityField } from '../types';

export const HostEntity: EntityField<Host>[] = [
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
    dataIndex: 'code',
    intlId: 'device.host.code',
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
    intlId: 'device.host.name',
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
    dataIndex: 'ip',
    intlId: 'common.ip',
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: false,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        width: 'lg',
      },
      rules: [{ type: 'ip' }],
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
];
