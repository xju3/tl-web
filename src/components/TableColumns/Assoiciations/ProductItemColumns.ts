import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { ProductItemEntity } from '@/components/TableEntities/ProductItemEntity';
import type { ProductItem } from '@/services/Device/Product/data';

export const getProductItemColumns = (
  intl: IntlShape,
): CustomProColumns<ProductItem>[] =>
  buildTableColumns(ProductItemEntity, intl);
