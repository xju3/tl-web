import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { TenantEntity } from '@/components/Entities/TenantEntity';
import TenantProductViewTabs from '@/components/ViewTabs/TenantProductViewTabs';
import type { Tenant } from '@/services/Org/Tenant/data';
import { deleteTenant, getTenantById } from '@/services/Org/Tenant/service';

const TenantViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Tenant>
      title={intl.formatMessage({ id: 'org.company.view' })}
      description={intl.formatMessage({ id: 'org.company.view' })}
      getById={getTenantById}
      deleteById={deleteTenant}
      editUrl="/org/company/edit"
      listUrl="/org/company"
      columns={buildDescriptions(TenantEntity, intl)}
      detailsComponent={(data) => <TenantProductViewTabs tenant={data} />}
    />
  );
};

export default TenantViewPage;
