import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import PeripheralInstructionAssociations from '@/components/Associations/PeripheralInstructionAssociations';
import type { Peripheral } from '@/services/Device/Peripheral/data';

type PeripheralViewTabsProps = {
  peripheral: Peripheral;
};

const PeripheralViewTabs: React.FC<PeripheralViewTabsProps> = ({
  peripheral,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  return (
    <Card style={{ marginTop: 16 }}>
      <Tabs
        activeKey={searchParams.get('tab') || 'instructions'}
        onChange={(key) => {
          history.push({
            pathname: location.pathname,
            search: `?tab=${key}`,
          });
        }}
      >
        <Tabs.TabPane
          tab={intl.formatMessage({
            id: 'device.peripheral.instruction.list.title',
          })}
          key="instructions"
        >
          <PeripheralInstructionAssociations peripheralId={peripheral.id} />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};

export default PeripheralViewTabs;
