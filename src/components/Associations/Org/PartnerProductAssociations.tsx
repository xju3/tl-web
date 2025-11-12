import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { PartnerProductEntity } from '@/components/Entities/Org/PartnerProductEntity';
import type { PartnerProduct } from '@/services/Org/Partner/data';
import {
  deletePartnerProduct,
  getPartnerProducts,
} from '@/services/Org/Partner/service';

type ItemsProps = {
  partnerId: string;
};

const columns = (intl: IntlShape): CustomProColumns<PartnerProduct>[] =>
  buildTableColumns(PartnerProductEntity, intl);

const PartnerProductAssociations: React.FC<ItemsProps> = ({ partnerId }) => {
  const intl = useIntl();

  return (
    <AssociationList<PartnerProduct>
      parentId={partnerId}
      services={{
        getPage: getPartnerProducts,
        deleteItem: deletePartnerProduct,
      }}
      columns={columns(intl)}
      addRoute={`/org/partner/${partnerId}/products/create`}
      editRoutePattern={`/org/partner/${partnerId}/products/:id/edit`}
      pagination={true}
      showIndexColumn={false}
    />
  );
};

export default PartnerProductAssociations;
