import { useIntl } from '@umijs/max';
import SelectModal from '@/components/Common/SelectModal';
import { columns as productColumns } from '@/components/TableColumns/Pages/ProductColumns';
import type { Product } from '@/services/Device/Product/data';
import { getProducts } from '@/services/Device/Product/service';

export type ProductSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onOk: (product: Product) => void;
};

const ProductSelector = ({ open, onCancel, onOk }: ProductSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = productColumns(() => {}, intl).filter(
    (c) => c.selector,
  );

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
