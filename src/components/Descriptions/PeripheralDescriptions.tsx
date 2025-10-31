import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export const PeripheralDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Peripheral>[] => [
  {
    dataIndex: 'code',
    title: intl.formatMessage({ id: 'device.peripheral.code' }),
  },
  {
    dataIndex: 'name',
    title: intl.formatMessage({ id: 'device.peripheral.name' }),
  },
];
