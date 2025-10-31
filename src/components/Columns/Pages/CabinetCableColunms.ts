import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { CabinetCable } from '@/services/Device/Cabinet/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<CabinetCable>[] => [
  {
    title: intl.formatMessage({ id: 'device.cabinet.code' }),
    dataIndex: 'code',
    key: 'code',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.name' }),
    dataIndex: 'name',
    key: 'name',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.cabinet.description' }),
    dataIndex: 'description',
    key: 'description',
  },
];
