import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { ProductEntity } from '@/components/TableEntities/ProductEntity';
import type { Product } from '@/services/Device/Product/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Product>[] => buildTableColumns(ProductEntity, intl);
