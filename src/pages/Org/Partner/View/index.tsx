import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { PartnerEntity } from '@/components/TableEntities/PartnerEntity';
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
      columns={buildDescriptions(PartnerEntity, intl)}
      detailsComponent={(data) => <TenantProductViewTabs tenant={data} />}
    />
  );
};

export default PartnerViewPage;
