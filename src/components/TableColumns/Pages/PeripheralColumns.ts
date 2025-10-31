import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Peripheral>[] => [
  {
    title: intl.formatMessage({ id: 'device.peripheral.code' }),
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.peripheral.name' }),
    dataIndex: 'name',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.peripheral.type' }),
    dataIndex: 'type',
    sorter: {
      multiple: 3,
    },
  },
];
