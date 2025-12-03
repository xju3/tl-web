import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import InstCabinetGroupItemAssociations from '@/components/Associations/Inst/InstCabinetGroupItemAssociations';
import type { InstCabinetGroup } from '@/services/Inst/Group/data';

type InstCabinetGroupTabsProps = {
  instCabinetGroup: InstCabinetGroup;
};

const InstCabinetGroupViewTabs: React.FC<InstCabinetGroupTabsProps> = ({
  instCabinetGroup,
}) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  const tabItems = [
    {
      label: intl.formatMessage({ id: 'inst.cabinet.group.items' }),
      key: 'items',
      children: (
        <InstCabinetGroupItemAssociations
          instCabinetGroupId={instCabinetGroup.id}
        />
      ),
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

export default InstCabinetGroupViewTabs;
