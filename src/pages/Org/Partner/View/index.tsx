import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { PartnerDescriptions } from '@/components/Descriptions/PartnerDescriptions';
import TenantProductViewTabs from '@/components/ViewTabs/TenantProductViewTabs';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartner } from '@/services/Org/Partner/service';

const PartnerViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Partner>
      title={intl.formatMessage({ id: 'tenant.partner.view' })}
      description={intl.formatMessage({ id: 'tenant.partner' })}
      getById={getPartner}
      deleteById={deletePartner}
      editUrl="/tenant/partner/edit"
      listUrl="/tenant/partner/list"
      columns={PartnerDescriptions(intl)}
      detailsComponent={(data) => <TenantProductViewTabs tenant={data} />}
    />
  );
};

export default PartnerViewPage;
