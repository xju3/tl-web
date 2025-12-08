import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { GoodsEntity } from '@/components/Entities/Manufacture/GoodsEntity';
import type { Goods } from '@/services/Manufacture/Goods/data';
import {
  deleteGoods,
  getGoodsList,
} from '@/services/Manufacture/Goods/service';

const SESSION_KEY = 'materialListState';

const GoodsListPage = () => {
  const services = {
    getList: getGoodsList,
    deleteItem: deleteGoods,
  };

  const routes = {
    add: '/device/hosts/add',
    edit: '/device/hosts/edit',
    view: '/device/hosts/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Goods>[] => buildTableColumns(GoodsEntity, intl);

  return (
    <ListPage<Goods>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default GoodsListPage;
