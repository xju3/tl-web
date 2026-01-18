import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { PartnerProductEntity } from '@/components/Entities/Manufacture/PartnerProductEntity';
import type { PartnerProduct } from '@/services/Manufacture/Product/data';
import {
  deleteGoods,
  getGoodsList,
} from '@/services/Manufacture/Product/service';

const SESSION_KEY = 'materialListState';

const GoodsListPage = () => {
  const services = {
    getList: getGoodsList,
    deleteItem: deleteGoods,
  };

  const routes = {
    add: '/manufacture/products/create',
    edit: '/manufacture/products/edit',
    view: '/manufacture/products/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<PartnerProduct>[] =>
    buildTableColumns(PartnerProductEntity, intl);

  return (
    <ListPage<PartnerProduct>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default GoodsListPage;
