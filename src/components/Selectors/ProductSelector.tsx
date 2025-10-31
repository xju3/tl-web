import type { ProColumns } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import SelectModal from '@/components/Common/SelectModal';
import type { Product } from '@/services/Device/Product/data';
import { getProducts } from '@/services/Device/Product/service';

export type ProductSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onOk: (product: Product) => void;
};

const ProductSelector = ({ open, onCancel, onOk }: ProductSelectorProps) => {
  const intl = useIntl();

  const columns: ProColumns<Product>[] = [
    {
      title: intl.formatMessage({ id: 'device.product.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'device.product.name' }),
      dataIndex: 'name',
    },
  ];

  return (
    <SelectModal<Product>
      title={intl.formatMessage({ id: 'device.product.list.title' })}
      open={open}
      onCancel={onCancel}
      onSelect={onOk}
      request={getProducts}
      columns={columns}
      intl={intl}
    />
  );
};

export default ProductSelector;
