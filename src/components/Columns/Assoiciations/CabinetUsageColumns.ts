import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';

export const getCabinetUsageColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetPeripheralUsage>[] => [
  {
    title: intl.formatMessage({ id: 'device.peripheral.code' }),
    dataIndex: 'peripheralCode',
  },
  {
    title: intl.formatMessage({ id: 'device.peripheral.name' }),
    dataIndex: 'peripheralName',
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.usage.sequence' }),
    dataIndex: 'sequence',
  },
];
