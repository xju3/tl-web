import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Tenant } from '@/services/Org/Tenant/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Tenant>[] => [
  {
    title: intl.formatMessage({ id: 'org.tenant.name' }),
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'org.tenant.code' }),
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
];
