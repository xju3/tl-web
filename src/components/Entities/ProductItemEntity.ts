import type { ProductItem } from '@/services/Device/Product/data';
import type { EntityField } from './types';

export const ProductItemEntity: EntityField<ProductItem>[] = [
  {
    intlId: 'device.product.item.deviceCode',
    dataIndex: 'deviceCode',
    inTable: true,
  },
  {
    intlId: 'device.product.item.deviceName',
    dataIndex: 'deviceName',
    inTable: true,
  },
];
