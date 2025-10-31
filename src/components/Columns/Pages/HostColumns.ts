import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Host } from '@/services/Device/Host/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Host>[] => [
  {
    title: intl.formatMessage({ id: 'device.host.code' }),
    dataIndex: 'code',
    key: 'code',
    sorter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.host.name' }),
    dataIndex: 'name',
    key: 'name',
    sorter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'common.ip' }),
    dataIndex: 'ip',
    key: 'ip',
    sorter: true,
    selector: true,
  },
];
