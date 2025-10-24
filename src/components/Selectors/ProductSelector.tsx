import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Modal } from 'antd';
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
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      valueType: 'option',
      width: '80px',
      render: (_, record: Product) => [
        <a
          key="select"
          onClick={() => {
            onOk(record);
          }}
        >
          {intl.formatMessage({ id: 'common.actions.select' })}
        </a>,
      ],
    },
  ];

  return (
    <Modal
      title={intl.formatMessage({ id: 'device.product.list.title' })}
      open={open}
      onCancel={onCancel}
      width={800}
      footer={null}
    >
      <ProTable<Product>
        columns={columns}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          const adjustedParams = {
            ...rest,
            currPage: current,
            pageSize,
          };
          return getProducts(adjustedParams);
        }}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
      />
    </Modal>
  );
};

export default ProductSelector;
