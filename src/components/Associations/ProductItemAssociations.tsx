import { useIntl } from '@umijs/max';
import React from 'react';
import { getProductItemColumns } from '@/components/Columns/Assoiciations/ProductItemColumns';
import AssociationList from '@/components/Common/Association/List';
import type { ProductItem } from '@/services/Device/Product/data';
import {
  deleteProductItem,
  getProductItems,
} from '@/services/Device/Product/service';

type ItemsProps = {
  productId: string;
};

const ProductItemAssociations: React.FC<ItemsProps> = ({ productId }) => {
  const intl = useIntl();

  return (
    <AssociationList<ProductItem>
      parentId={productId}
      services={{
        getPage: getProductItems,
        deleteItem: deleteProductItem,
      }}
      columns={getProductItemColumns(intl)}
      addRoute={`/device/product/${productId}/item/add`}
      editRoutePattern={`/device/product/:parentId/item/edit/:id`}
      headerTitle={intl.formatMessage({
        id: 'device.product.item.list.title',
      })}
      pagination={true}
    />
  );
};

export default ProductItemAssociations;
