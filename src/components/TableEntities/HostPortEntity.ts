import type { HostSerialPort } from '@/services/Device/Host/data';
import type { EntityField } from './types';

export const HostPortEntity: EntityField<HostSerialPort>[] = [
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'name',
    inTable: true,
  },
  {
    intlId: 'device.serial-port.code',
    dataIndex: 'port',
    inTable: true,
  },
  {
    intlId: 'device.serial-port.baudRate',
    dataIndex: 'baudRate',
    inTable: true,
  },
];
