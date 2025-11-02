import type { HostSerialPort } from '@/services/Device/Host/data';
import type { EntityField } from '../types';

export const HostPortEntity: EntityField<HostSerialPort>[] = [
  {
    dataIndex: 'id',
  },
  {
    dataIndex: 'hostId',
  },
  {
    dataIndex: 'serialPortId',
  },
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'name',
    visibility: {
      inTable: true,
    },
  },
  {
    intlId: 'device.serial-port.code',
    dataIndex: 'port',
    visibility: {
      inTable: true,
    },
  },
  {
    intlId: 'device.serial-port.baudRate',
    dataIndex: 'baudRate',
    visibility: {
      inTable: true,
    },
  },
];
