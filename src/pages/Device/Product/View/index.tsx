import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { ProductEntity } from '@/components/TableEntities/ProductEntity';
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
      columns={buildDescriptions(ProductEntity, intl)}
      detailsComponent={(product) => <ProductViewTabs product={product} />}
    />
  );
};

export default ProductViewPage;
