import ListPage from '@/components/Common/Pages/List';
import { columns } from '@/components/TableColumns/Pages/ProductColumns';
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
