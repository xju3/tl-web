import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import ProductItemAssociations from '@/components/Associations/Device/ProductItemAssociations';
import type { Product } from '@/services/Device/Product/data';

type ProductViewTabsProps = {
  product: Product;
};

const ProductViewTabs: React.FC<ProductViewTabsProps> = ({ product }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  const tabItems = [
    {
      label: intl.formatMessage({
        id: 'device.product.item.list.title',
      }),
      key: 'items',
      children: <ProductItemAssociations productId={product.id} />,
    },
  ];

  return (
    <Card>
      <Tabs
        activeKey={searchParams.get('tab') || 'items'}
        onChange={(key) => {
          history.push({
            pathname: location.pathname,
            search: `?tab=${key}`,
          });
        }}
        items={tabItems}
      />
    </Card>
  );
};

export default ProductViewTabs;
