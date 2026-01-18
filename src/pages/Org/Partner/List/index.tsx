import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { PartnerEntity } from '@/components/Entities/Org/PartnerEntity';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartners } from '@/services/Org/Partner/service';

const SESSION_KEY = 'partnerListState';

const PartnerListPage = () => {
  const services = {
    getList: getPartners,
    deleteItem: deletePartner,
  };

  const routes = {
    add: '/org/partners/add',
    edit: '/org/partners/edit',
    view: '/org/partners/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Partner>[] => buildTableColumns(PartnerEntity, intl);

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
