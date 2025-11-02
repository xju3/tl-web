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

  const tabItems = [
    {
      label: intl.formatMessage({ id: 'device.host.serial-ports.title' }),
      key: 'ports',
      children: <HostPortAssociations hostId={host.id} />,
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

export default HostViewTabs;
