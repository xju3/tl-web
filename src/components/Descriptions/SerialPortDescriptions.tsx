import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { SerialPort } from '@/services/Device/SerialPort/data';

export const SerialPortDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<SerialPort>[] => [
  {
    title: intl.formatMessage({ id: 'device.serial-port.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.protocol' }),
    dataIndex: 'protocol',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.baudRate' }),
    dataIndex: 'baudRate',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.dataBits' }),
    dataIndex: 'dataBits',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.stopBits' }),
    dataIndex: 'stopBits',
  },
  {
    title: intl.formatMessage({ id: 'device.serial-port.parity' }),
    dataIndex: 'parity',
  },
  {
    title: intl.formatMessage({ id: 'common.description' }),
    dataIndex: 'description',
    span: 2,
  },
];
