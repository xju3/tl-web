import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { PartnerEntity } from '@/components/Entities/Org/PartnerEntity';
import PartnerProductViewTabs from '@/components/ViewTabs/PartnerProductViewTabs';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartner } from '@/services/Org/Partner/service';

const PartnerViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Partner>
      title={intl.formatMessage({ id: 'tenant.partner.view' })}
      description={intl.formatMessage({ id: 'org.partner' })}
      getById={getPartner}
      deleteById={deletePartner}
      editUrl="/org/partner/edit"
      listUrl="/org/partner/list"
      columns={buildDescriptions(PartnerEntity, intl)}
      detailsComponent={(data) => <PartnerProductViewTabs partner={data} />}
    />
  );
};

export default PartnerViewPage;
