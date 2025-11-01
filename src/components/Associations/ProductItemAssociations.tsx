import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { ProductItemEntity } from '@/components/Entities/ProductItemEntity';
import type { ProductItem } from '@/services/Device/Product/data';
import {
  deleteProductItem,
  getProductItems,
} from '@/services/Device/Product/service';

type ItemsProps = {
  productId: string;
};

const getProductItemColumns = (
  intl: IntlShape,
): CustomProColumns<ProductItem>[] =>
  buildTableColumns(ProductItemEntity, intl);

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
