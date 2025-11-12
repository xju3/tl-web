import type { Instruction } from '@/services/Device/Peripheral/data';
import type { EntityField } from '../types';

export const PeripheralInstructionEntity: EntityField<Instruction>[] = [
  {
    intlId: 'device.peripheral.instruction.instruction',
    dataIndex: 'instruction',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    intlId: 'device.peripheral.instruction.acknowledge',
    dataIndex: 'acknowledge',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    intlId: 'device.peripheral.instruction.comment',
    dataIndex: 'comment',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'textarea',
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    intlId: 'device.peripheral.type',
    dataIndex: 'type',
    valueEnum: {
      '1': 'Action',
      '2': 'Acquire',
    },
    sorter: {
      multiple: 3,
    },
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
  {
    dataIndex: 'id',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'peripheralId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
