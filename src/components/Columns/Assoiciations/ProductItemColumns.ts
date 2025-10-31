import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { ProductItem } from '@/services/Device/Product/data';

export const getProductItemColumns = (
  intl: IntlShape,
): CustomProColumns<ProductItem>[] => [
  {
    title: intl.formatMessage({ id: 'device.product.item.deviceCode' }),
    dataIndex: 'deviceCode',
  },
  {
    title: intl.formatMessage({ id: 'device.product.item.deviceName' }),
    dataIndex: 'deviceName',
  },
];
