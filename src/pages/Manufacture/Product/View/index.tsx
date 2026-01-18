import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { PartnerProductEntity } from '@/components/Entities/Manufacture/PartnerProductEntity';
import type { PartnerProduct } from '@/services/Manufacture/Product/data';
import {
  deleteGoods,
  getGoodsById,
} from '@/services/Manufacture/Product/service';

const GoodsViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<PartnerProduct>
      title={intl.formatMessage({ id: 'menu.manufacture.products.view' })}
      description={(host) => host.name}
      getById={getGoodsById}
      deleteById={deleteGoods}
      editUrl="/manufacture/products/edit"
      listUrl="/manufacture/products"
      columns={buildDescriptions(PartnerProductEntity, intl)}
    />
  );
};

export default GoodsViewPage;
