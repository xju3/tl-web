import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Role } from '@/services/Sys/Role/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Role>[] => [
  {
    title: intl.formatMessage({ id: 'page.sys.role.code' }),
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'page.sys.role.name' }),
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
];
