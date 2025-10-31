import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { HostSerialPort } from '@/services/Device/Host/data';

export const getHostPortColumns = (
  intl: IntlShape,
): CustomProColumns<HostSerialPort>[] => [
  {
    title: intl.formatMessage({ id: 'device.serial-port.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.code' }),
    dataIndex: 'port',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.baudRate' }),
    dataIndex: 'baudRate',
  },
];
