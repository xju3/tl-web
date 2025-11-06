import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { ProductEntity } from '@/components/Entities/Device/ProductEntity';
import type { Product } from '@/services/Device/Product/data';
import { getProducts } from '@/services/Device/Product/service';

export type ProductSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (product: Product) => void;
};

const columns = (intl: any): CustomProColumns<Product>[] =>
  buildSelectors(ProductEntity, intl);

const ProductSelector = ({
  open,
  onCancel,
  onSelect,
}: ProductSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<Product>
      title={intl.formatMessage({ id: 'device.product.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getProducts}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default ProductSelector;
