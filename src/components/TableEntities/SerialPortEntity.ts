import type { SerialPort } from '@/services/Device/SerialPort/data';
import type { EntityField } from './types';

export const SerialPortEntity: EntityField<SerialPort>[] = [
  {
    intlId: 'device.serial-port.code',
    dataIndex: 'code',
    sorter: true,
    inTable: true,
    inSelector: true,
  },
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'name',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'device.serial-port.protocol',
    dataIndex: 'protocol',
    sorter: true,
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'device.serial-port.baudRate',
    dataIndex: 'baudRate',
    width: '120px',
    sorter: true,
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'device.serial-port.dataBits',
    dataIndex: 'dataBits',
    width: '120px',
    sorter: true,
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'device.serial-port.stopBits',
    dataIndex: 'stopBits',
    width: '120px',
    sorter: true,
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'device.serial-port.parity',
    dataIndex: 'parity',
    width: '120px',
    sorter: true,
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'common.description',
    dataIndex: 'description',
    span: 2,
    inDescription: true,
  },
];
