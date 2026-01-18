import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { PartnerProductEntity } from '@/components/Entities/Manufacture/PartnerProductEntity';
import type { PartnerProduct } from '@/services/Manufacture/Product/data';
import {
  createGoods,
  getGoodsById,
  updateGoods,
} from '@/services/Manufacture/Product/service';

const GoodsForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<PartnerProduct>(PartnerProductEntity, intl)}</>;
};

const GoodsEditPage = () => {
  const services = {
    addItem: createGoods,
    updateItem: updateGoods,
    getItemById: getGoodsById,
  };

  const backRoute = '/manufacture/products';

  return (
    <EditPage<PartnerProduct> services={services} backRoute={backRoute}>
      <GoodsForm />
    </EditPage>
  );
};

export default GoodsEditPage;
