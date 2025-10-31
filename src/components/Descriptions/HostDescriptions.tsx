import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Host } from '@/services/Device/Host/data';

export const HostDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Host>[] => [
  {
    dataIndex: 'code',
    title: intl.formatMessage({ id: 'device.host.code' }),
  },
  {
    dataIndex: 'name',
    title: intl.formatMessage({ id: 'device.host.name' }),
  },
  {
    dataIndex: 'ip',
    title: intl.formatMessage({ id: 'common.ip' }),
  },
];
