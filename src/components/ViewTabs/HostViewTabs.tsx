import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import HostPortAssociations from '@/components/Associations/Device/HostPortAssociations';
import type { Host } from '@/services/Device/Host/data';

type HostViewTabsProps = {
  host: Host;
};

const HostViewTabs: React.FC<HostViewTabsProps> = ({ host }) => {
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
            id: 'device.host.serial-ports.title',
          })}
          key="ports"
        >
          <HostPortAssociations hostId={host.id} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};

export default HostViewTabs;
