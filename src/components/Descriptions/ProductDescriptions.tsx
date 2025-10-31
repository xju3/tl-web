import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Product } from '@/services/Device/Product/data';

export const ProductDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Product>[] => [
  {
    dataIndex: 'code',
    title: intl.formatMessage({ id: 'device.product.code' }),
  },
  {
    dataIndex: 'name',
    title: intl.formatMessage({ id: 'device.product.name' }),
  },
  {
    dataIndex: 'm_date',
    title: intl.formatMessage({ id: 'device.product.m_date' }),
  },
];
