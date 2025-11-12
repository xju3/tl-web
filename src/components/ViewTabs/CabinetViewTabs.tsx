import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import CabinetCableAssociations from '@/components/Associations/Device/CabinetCableAssociations';
import CabinetPeripheralAssociations from '@/components/Associations/Device/CabinetPeripheralAssociations';
import CabinetPeripheralUsageAssociations from '@/components/Associations/Device/CabinetPeripheralUsageAssociations';
import type { Cabinet } from '@/services/Device/Cabinet/data';

type CabinetViewTabsProps = {
  cabinet: Cabinet;
};

const CabinetViewTabs: React.FC<CabinetViewTabsProps> = ({ cabinet }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();
  const tabItems = [];

  if (cabinet?.parentId == null) {
    tabItems.push({
      label: intl.formatMessage({ id: 'device.peripheral.list.title' }),
      key: 'peripherals',
      children: <CabinetPeripheralAssociations cabinetId={cabinet.id} />,
    });
  }

  if (cabinet?.parentId == null) {
    tabItems.push({
      label: intl.formatMessage({ id: 'device.cabinet.cable.list.title' }),
      key: 'cables',
      children: <CabinetCableAssociations cabinetId={cabinet.id} />,
    });
  }

  if (cabinet?.parentId != null) {
    tabItems.push({
      label: intl.formatMessage({ id: 'device.cabinet.peripheral.usage' }),
      key: 'usages',
      children: <CabinetPeripheralUsageAssociations cabinetId={cabinet.id} />,
    });
  }

  // console.log("tabs:", tabItems.length);
  const defaultActiveKey = cabinet?.parentId != null ? 'usages' : 'peripherals';
  return (
    <Card>
      <Tabs
        activeKey={searchParams.get('tab') || defaultActiveKey}
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

export default CabinetViewTabs;
