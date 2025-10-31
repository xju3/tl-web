import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Product } from '@/services/Device/Product/data';
import { deleteProduct, getProducts } from '@/services/Device/Product/service';

const SESSION_KEY = 'cabinetListState';

const ProductListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Product>[] => [
    {
      title: intl.formatMessage({ id: 'device.product.code' }),
      dataIndex: 'code',
      sorter: {
        multiple: 1,
      },
      showColumnFilter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.product.name' }),
      dataIndex: 'name',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'device.product.m_date' }),
      dataIndex: 'm_date',
      valueType: 'date',
      sorter: {
        multiple: 1,
      },
    },
  ];

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
