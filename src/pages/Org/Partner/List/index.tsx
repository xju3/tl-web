import React from 'react';
import { columns } from '@/components/Columns/Pages/PartnerColumns';
import ListPage from '@/components/Common/Pages/List';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartners } from '@/services/Org/Partner/service';

const SESSION_KEY = 'partnerListState';

const PartnerListPage = () => {
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
