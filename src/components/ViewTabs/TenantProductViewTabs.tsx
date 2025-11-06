import { useLocation } from '@@/exports';
import { history, useIntl } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import TenantProductAssociations from '@/components/Associations/Org/TenantProductAssociations';
import type { Partner } from '@/services/Org/Partner/data';
import { type Tenant, TenantProduct } from '@/services/Org/Tenant/data';

type TenantViewTabsProps = {
  tenant: Tenant;
};

const TenantProductViewTabs: React.FC<TenantViewTabsProps> = ({ tenant }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  const tabItems = [
    {
      label: intl.formatMessage({ id: 'org.tenant.products' }),
      key: 'products',
      children: <TenantProductAssociations tenantId={tenant.id} />,
    },
  ];

  return (
    <Card>
      <Tabs
        activeKey={searchParams.get('tab') || 'products'}
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

export default TenantProductViewTabs;
