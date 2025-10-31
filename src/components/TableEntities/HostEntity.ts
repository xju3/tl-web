import type { Host } from '@/services/Device/Host/data';
import type { EntityField } from './types';

export const HostEntity: EntityField<Host>[] = [
  {
    intlId: 'device.host.code',
    dataIndex: 'code',
    key: 'code',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'device.host.name',
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'common.ip',
    dataIndex: 'ip',
    key: 'ip',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
];
