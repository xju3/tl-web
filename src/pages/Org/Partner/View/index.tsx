import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { PartnerEntity } from '@/components/Entities/Org/PartnerEntity';
import PartnerViewTabs from '@/components/ViewTabs/PartnerViewTabs';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartner } from '@/services/Org/Partner/service';

const PartnerViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Partner>
      title={intl.formatMessage({ id: 'org.partner.view' })}
      description={(partner) => partner.name}
      getById={getPartner}
      deleteById={deletePartner}
      editUrl="/org/partner/edit"
      listUrl="/org/partner/list"
      columns={buildDescriptions(PartnerEntity, intl)}
      detailsComponent={(partner) => <PartnerViewTabs partner={partner} />}
    />
  );
};

export default PartnerViewPage;
