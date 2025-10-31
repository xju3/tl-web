import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Partner } from '@/services/Org/Partner/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Partner>[] => [
  {
    title: intl.formatMessage({ id: 'org.partner.code' }),
    dataIndex: 'code',
    sorter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'org.partner.name' }),
    dataIndex: 'name',
    sorter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'org.partner.address' }),
    dataIndex: 'address',
  },
  {
    title: intl.formatMessage({ id: 'org.partner.org' }),
    dataIndex: 'orgId',
    valueType: 'select',
    valueEnum: {
      true: { text: 'Yes' },
      false: { text: 'No' },
    },
  },
];
