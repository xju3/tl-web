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
    width: 180,
    form: {
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    intlId: 'device.peripheral.instruction.ackBytes',
    dataIndex: 'ackBytes',
    visibility: {
      inTable: true,
      inForm: true,
    },
    width: 120,
    form: {
      fieldType: 'digit',
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    intlId: 'device.peripheral.instruction.acknowledge',
    dataIndex: 'acknowledge',
    visibility: {
      inTable: false,
      inForm: false,
    },
    width: 180,
    form: {
      formItemProps: {
        width: 'lg',
      },
    },
  },
  {
    intlId: 'device.peripheral.type',
    dataIndex: 'type',
    valueEnum: {
      '11': 'cmd.open.single.locker',
      '12': 'cmd.query.single.locker',
      '13': 'cmd.query.all.locker',
      '22': 'cmd.query.all.loadcell.weights',
      '31': 'cmd.turn.on.the.light',
      '32': 'cmd.turn.off.the.light',
      '41': 'cmd.set.the.led.text',
      '51': 'cmd.drive.spring',
      '61': 'cmd.play.sound',
    },
    width: 120,
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
    intlId: 'common.status',
    dataIndex: 'status',
    valueEnum: {
      '0': 'common.disable',
      '1': 'common.enabled',
    },
    width: 70,
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
