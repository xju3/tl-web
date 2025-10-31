import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { User } from '@/services/Sys/User/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<User>[] => [
  {
    title: intl.formatMessage({ id: 'page.sys.user.code' }),
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'page.sys.user.name' }),
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
];
