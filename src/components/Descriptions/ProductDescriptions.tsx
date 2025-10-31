import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { ProductEntity } from '@/components/TableEntities/ProductEntity';
import type { Product } from '@/services/Device/Product/data';

export const ProductDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Product>[] =>
  buildDescriptions(ProductEntity, intl);
