import type { Host } from '@/services/Device/Host/data';
import type { EntityField } from './types';

export const HostEntity: EntityField<Host>[] = [
  {
    dataIndex: 'id',
  },
  {
    dataIndex: 'code',
    intlId: 'device.host.code',
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    formItemProps: {
      width: 'lg',
      placeholder: 'input code here, max length less than 8',
    },
    rules: [{ type: 'required' }, { type: 'length', args: [2, 8] }],
  },
  {
    dataIndex: 'name',
    intlId: 'device.host.name',
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    formItemProps: {
      width: 'lg',
    },
    rules: [{ type: 'required' }, { type: 'length', args: [2, 32] }],
  },
  {
    dataIndex: 'ip',
    intlId: 'common.ip',
    inTable: true,
    inDescription: true,
    inSelector: false,
    inForm: true,
    fieldType: 'text',
    formItemProps: {
      width: 'lg',
    },
    rules: [{ type: 'ip' }],
  },
];
