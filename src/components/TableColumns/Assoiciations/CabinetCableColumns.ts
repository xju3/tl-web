import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { CabinetCable } from '@/services/Device/Cabinet/data';

export const getCabinetCableColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetCable>[] => [
  {
    title: intl.formatMessage({ id: 'device.cabinet.cable.code' }),
    dataIndex: 'code',
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.cable.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'device.host.code' }),
    dataIndex: 'hostCode',
  },
  {
    title: intl.formatMessage({ id: 'device.host.name' }),
    dataIndex: 'hostName',
  },
  {
    title: intl.formatMessage({ id: 'device.host.port.code' }),
    dataIndex: 'hostPortCode',
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.cable.description' }),
    dataIndex: 'description',
  },
];
