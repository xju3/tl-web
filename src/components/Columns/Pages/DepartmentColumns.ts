import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Department } from '@/services/Org/Department/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Department>[] => [
  {
    title: intl.formatMessage({ id: 'page.org.department.code' }),
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'page.org.department.name' }),
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
];
