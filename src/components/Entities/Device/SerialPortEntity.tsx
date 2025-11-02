import type { SerialPort } from '@/services/Device/SerialPort/data';
import type { EntityField } from '../types';

export const SerialPortEntity: EntityField<SerialPort>[] = [
  {
    intlId: 'device.serial-port.code',
    dataIndex: 'code',
    sorter: true,
    visibility: {
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'name',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'device.serial-port.protocol',
    dataIndex: 'protocol',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'device.serial-port.baudRate',
    dataIndex: 'baudRate',
    width: '120px',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
  {
    intlId: 'device.serial-port.dataBits',
    dataIndex: 'dataBits',
    width: '120px',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
  {
    intlId: 'device.serial-port.stopBits',
    dataIndex: 'stopBits',
    width: '120px',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
  {
    intlId: 'device.serial-port.parity',
    dataIndex: 'parity',
    width: '120px',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'common.description',
    dataIndex: 'description',
    span: 2,
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'textarea',
    },
  },
];
