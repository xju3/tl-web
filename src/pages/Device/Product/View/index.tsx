import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { ProductDescriptions } from '@/components/Descriptions/ProductDescriptions';
import type { Product } from '@/services/Device/Product/data';
import {
  deleteProduct,
  getProductById,
} from '@/services/Device/Product/service';
import ProductViewTabs from '../../../../components/ViewTabs/ProductViewTabs';

const ProductViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Product>
      title={intl.formatMessage({ id: 'device.product.view.title' })}
      description={(product) => product.name}
      getById={getProductById}
      deleteById={deleteProduct}
      editUrl="/device/product/edit"
      listUrl="/device/product"
      columns={ProductDescriptions(intl)}
      detailsComponent={(product) => <ProductViewTabs product={product} />}
    />
  );
};

export default ProductViewPage;
