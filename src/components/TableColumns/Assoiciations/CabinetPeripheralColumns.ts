import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export const getCabinetPeripheralColumns = (
  intl: IntlShape,
): CustomProColumns<Peripheral>[] => [
  {
    title: intl.formatMessage({ id: 'device.peripheral.code' }),
    dataIndex: 'code',
  },
  {
    title: intl.formatMessage({ id: 'device.peripheral.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.cable.code' }),
    dataIndex: 'cableCode',
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.cable.name' }),
    dataIndex: 'cableName',
  },
  {
    title: intl.formatMessage({ id: 'device.peripheral.quantity' }),
    dataIndex: 'quantity',
  },
];
