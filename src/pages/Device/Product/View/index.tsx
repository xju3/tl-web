import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { ProductEntity } from '@/components/Entities/ProductEntity';
import ProductViewTabs from '@/components/ViewTabs/ProductViewTabs';
import type { Product } from '@/services/Device/Product/data';
import {
  deleteProduct,
  getProductById,
} from '@/services/Device/Product/service';

const ProductViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Product>
      title={intl.formatMessage({ id: 'device.product.view.title' })}
      description={(product) => product.name}
      getById={getProductById}
      deleteById={deleteProduct}
      editUrl="/device/products/:id/edit"
      listUrl="/device/products"
      columns={buildDescriptions(ProductEntity, intl)}
      detailsComponent={(product) => <ProductViewTabs product={product} />}
    />
  );
};

export default ProductViewPage;
