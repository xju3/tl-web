import { history, useIntl, useLocation } from '@umijs/max';
import { Card, Tabs } from 'antd';
import React from 'react';
import UserRoleAssociations from '@/components/Associations/Sys/UserRoleAssociations';
import type { User } from '@/services/Sys/User/data';

type TabsProps = {
  user: User;
};

const ViewTabs: React.FC<TabsProps> = ({ user }) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intl = useIntl();

  const tabItems = [
    {
      label: intl.formatMessage({ id: 'sys.user.roles' }),
      key: 'ports',
      children: <UserRoleAssociations userId={user.id} />,
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

export default ViewTabs;
