import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Instruction } from '@/services/Device/Peripheral/data';

export const getPeripheralInstructionColumns = (
  intl: IntlShape,
): CustomProColumns<Instruction>[] => [
  {
    title: intl.formatMessage({
      id: 'device.peripheral.instruction.instruction',
    }),
    dataIndex: 'instruction',
  },
  {
    title: intl.formatMessage({
      id: 'device.peripheral.instruction.acknowledge',
    }),
    dataIndex: 'acknowledge',
  },
  {
    title: intl.formatMessage({
      id: 'device.peripheral.instruction.comment',
    }),
    dataIndex: 'comment',
  },
];
