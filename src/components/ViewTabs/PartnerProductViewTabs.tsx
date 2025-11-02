import { useLocation } from '@@/exports';
import { history, useIntl } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import PartnerProductAssociations from '@/components/Associations/Org/PartnerProductAssociations';
import type { Partner } from '@/services/Org/Partner/data';

type PartnerViewTabsProps = {
  partner: Partner;
};

const PartnerViewTabs: React.FC<PartnerViewTabsProps> = ({ partner }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  const tabItems = [
    {
      label: intl.formatMessage({ id: 'org.partner.products' }),
      key: 'ports',
      children: <PartnerProductAssociations partnerId={partner.id} />,
    },
  ];

  return (
    <Card>
      <Tabs
        activeKey={searchParams.get('tab') || 'ports'}
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

export default PartnerViewTabs;
