import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { GoodsEntity } from '@/components/Entities/Manufacture/GoodsEntity';
import type { Goods } from '@/services/Manufacture/Goods/data';
import {
  deleteGoods,
  getGoodsById,
} from '@/services/Manufacture/Goods/service';

const GoodsViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Goods>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getGoodsById}
      deleteById={deleteGoods}
      editUrl="/device/hosts/edit"
      listUrl="/device/hosts"
      columns={buildDescriptions(GoodsEntity, intl)}
    />
  );
};

export default GoodsViewPage;
