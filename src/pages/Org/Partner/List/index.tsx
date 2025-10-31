import { FormattedMessage } from '@@/exports';
import React from 'react';
import ListPage from '@/components/CommonPages/List';
import type { CustomProColumns } from '@/components/CommonPages/List/typing';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartners } from '@/services/Org/Partner/service';

const SESSION_KEY = 'partnerListState';

const PartnerListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Partner>[] => [
    {
      title: <FormattedMessage id="org.partner.code" />,
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: <FormattedMessage id="org.partner.name" />,
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: <FormattedMessage id="org.partner.address" />,
      dataIndex: 'address',
    },
    {
      title: <FormattedMessage id="org.partner.org" />,
      dataIndex: 'orgId',
      valueType: 'select',
      valueEnum: {
        true: { text: 'Yes' },
        false: { text: 'No' },
      },
    },
  ];

  const services = {
    getList: getPartners,
    deleteItem: deletePartner,
  };

  const routes = {
    add: '/org/partner/add',
    edit: '/org/partner/edit',
    view: '/org/partner/view',
  };

  return (
    <ListPage<Partner>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default PartnerListPage;
