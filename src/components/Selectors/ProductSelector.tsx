import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/TableEntities/Builder';
import { ProductEntity } from '@/components/TableEntities/ProductEntity';
import type { Product } from '@/services/Device/Product/data';
import { getProducts } from '@/services/Device/Product/service';

export type ProductSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onOk: (product: Product) => void;
};

const columns = (intl: any): CustomProColumns<Product>[] =>
  buildSelectors(ProductEntity, intl);

const ProductSelector = ({ open, onCancel, onOk }: ProductSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<Product>
      title={intl.formatMessage({ id: 'device.product.list.title' })}
      open={open}
      onCancel={onCancel}
      onSelect={onOk}
      request={getProducts}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default ProductSelector;
