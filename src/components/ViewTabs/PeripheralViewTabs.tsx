import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import PeripheralInstructionAssociations from '@/components/Associations/Device/PeripheralInstructionAssociations';
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

  const tabItems = [
    {
      label: intl.formatMessage({
        id: 'device.peripheral.instruction.list.title',
      }),
      key: 'instructions',
      children: (
        <PeripheralInstructionAssociations peripheralId={peripheral.id} />
      ),
    },
  ];

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
        items={tabItems}
      />
    </Card>
  );
};

export default PeripheralViewTabs;
