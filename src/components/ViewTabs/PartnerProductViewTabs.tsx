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
      >
        <Tabs.TabPane
          tab={intl.formatMessage({
            id: 'org.partner.products',
          })}
          key="ports"
        >
          <PartnerProductAssociations partnerId={partner.id} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};

export default PartnerViewTabs;
