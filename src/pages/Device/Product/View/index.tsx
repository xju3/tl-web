import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { Product } from '@/services/Device/Product/data';
import {
  deleteProduct,
  getProductById,
} from '@/services/Device/Product/service';
import ProductViewTabs from '../../../../components/ViewTabs/ProductViewTabs';

const ProductViewPage = () => {
  const intl = useIntl();

  const columns = [
    {
      dataIndex: 'code',
      title: intl.formatMessage({ id: 'device.product.code' }),
    },
    {
      dataIndex: 'name',
      title: intl.formatMessage({ id: 'device.product.name' }),
    },
    {
      dataIndex: 'm_date',
      title: intl.formatMessage({ id: 'device.product.m_date' }),
    },
  ];

  return (
    <ViewPage<Product>
      title={intl.formatMessage({ id: 'device.product.view.title' })}
      description={(product) => product.name}
      getById={getProductById}
      deleteById={deleteProduct}
      editUrl="/device/product/edit"
      listUrl="/device/product"
      columns={columns}
      detailsComponent={(product) => <ProductViewTabs product={product} />}
    />
  );
};

export default ProductViewPage;
