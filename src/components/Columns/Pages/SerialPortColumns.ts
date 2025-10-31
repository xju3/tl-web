import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { SerialPort } from '@/services/Device/SerialPort/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<SerialPort>[] => [
  {
    title: intl.formatMessage({ id: 'device.serial-port.code' }),
    dataIndex: 'code',
    sorter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.name' }),
    dataIndex: 'name',
    sorter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.protocol' }),
    dataIndex: 'protocol',
    sorter: true,
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.baudRate' }),
    dataIndex: 'baudRate',
    width: '120px',
    sorter: true,
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.dataBits' }),
    dataIndex: 'dataBits',
    width: '120px',
    sorter: true,
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.stopBits' }),
    dataIndex: 'stopBits',
    width: '120px',
    sorter: true,
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.parity' }),
    dataIndex: 'parity',
    width: '120px',
    sorter: true,
  },
];
