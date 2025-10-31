import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Product } from '@/services/Device/Product/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Product>[] => [
  {
    title: intl.formatMessage({ id: 'device.product.code' }),
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
    showColumnFilter: true,
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.product.name' }),
    dataIndex: 'name',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'device.product.m_date' }),
    dataIndex: 'm_date',
    valueType: 'date',
    sorter: {
      multiple: 1,
    },
  },
];
