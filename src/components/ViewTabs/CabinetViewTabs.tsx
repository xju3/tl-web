import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import CabinetCableAssociations from '@/components/Associations/Device/CabinetCableAssociations';
import CabinetPeripheralAssociations from '@/components/Associations/Device/CabinetPeripheralAssociations';
import CabinetUsageAssociations from '@/components/Associations/Device/CabinetUsageAssociations';
import type { Cabinet } from '@/services/Device/Cabinet/data';

type CabinetViewTabsProps = {
  cabinet: Cabinet;
};

const CabinetViewTabs: React.FC<CabinetViewTabsProps> = ({ cabinet }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  return (
    <Card>
      <Tabs
        activeKey={searchParams.get('tab') || 'peripherals'}
        onChange={(key) => {
          history.push({
            pathname: location.pathname,
            search: `?tab=${key}`,
          });
        }}
      >
        <Tabs.TabPane
          tab={intl.formatMessage({ id: 'device.peripheral.list.title' })}
          key="peripherals"
        >
          <CabinetPeripheralAssociations cabinetId={cabinet.id} />
        </Tabs.TabPane>

        {cabinet?.parentId == null && (
          <Tabs.TabPane
            tab={intl.formatMessage({
              id: 'device.cabinet.cable.list.title',
            })}
            key="cables"
          >
            <CabinetCableAssociations cabinetId={cabinet.id} />
          </Tabs.TabPane>
        )}
        {cabinet?.parentId != null && (
          <Tabs.TabPane
            tab={intl.formatMessage({
              id: 'device.cabinet.usage.list.title',
            })}
            key="usages"
          >
            <CabinetUsageAssociations cabinetId={cabinet.id} />
          </Tabs.TabPane>
        )}
      </Tabs>
    </Card>
  );
};

export default CabinetViewTabs;
