import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { GoodsEntity } from '@/components/Entities/Manufacture/GoodsEntity';
import type { Goods } from '@/services/Manufacture/Goods/data';
import {
  createGoods,
  getGoodsById,
  updateGoods,
} from '@/services/Manufacture/Goods/service';

const GoodsForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Goods>(GoodsEntity, intl)}</>;
};

const GoodsEditPage = () => {
  const services = {
    addItem: createGoods,
    updateItem: updateGoods,
    getItemById: getGoodsById,
  };

  const backRoute = '/device/hosts';

  return (
    <EditPage<Goods> services={services} backRoute={backRoute}>
      <GoodsForm />
    </EditPage>
  );
};

export default GoodsEditPage;
