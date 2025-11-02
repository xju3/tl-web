import type { Instruction } from '@/services/Device/Peripheral/data';
import type { EntityField } from '../types';

export const PeripheralInstructionEntity: EntityField<Instruction>[] = [
  {
    intlId: 'device.peripheral.instruction.instruction',
    dataIndex: 'instruction',
    inTable: true,
    inForm: true,
    formItemProps: {
      width: 'lg',
    },
  },
  {
    intlId: 'device.peripheral.instruction.acknowledge',
    dataIndex: 'acknowledge',
    inTable: true,
    inForm: true,
    formItemProps: {
      width: 'lg',
    },
  },
  {
    intlId: 'device.peripheral.instruction.comment',
    dataIndex: 'comment',
    inTable: true,
    inForm: true,
    formItemProps: {
      width: 'lg',
    },
  },
];
