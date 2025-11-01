import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { ProductEntity } from '@/components/Entities/ProductEntity';
import type { Product } from '@/services/Device/Product/data';
import { deleteProduct, getProducts } from '@/services/Device/Product/service';

const SESSION_KEY = 'cabinetListState';

const ProductListPage = () => {
  const services = {
    getList: getProducts,
    deleteItem: deleteProduct,
  };

  const routes = {
    add: '/device/products/add',
    edit: '/device/products/edit',
    view: '/device/products/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Product>[] => buildTableColumns(ProductEntity, intl);

  return (
    <ListPage<Product>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default ProductListPage;
