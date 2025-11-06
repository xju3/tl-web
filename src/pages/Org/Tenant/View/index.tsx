import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { TenantEntity } from '@/components/Entities/Org/TenantEntity';
import TenantProductViewTabs from '@/components/ViewTabs/TenantProductViewTabs';
import type { Tenant } from '@/services/Org/Tenant/data';
import { deleteTenant, getTenantById } from '@/services/Org/Tenant/service';

const TenantViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Tenant>
      title={intl.formatMessage({ id: 'org.tenant.view' })}
      description={intl.formatMessage({ id: 'org.tenant.view' })}
      getById={getTenantById}
      deleteById={deleteTenant}
      editUrl="/org/tenant/edit"
      listUrl="/org/tenant"
      columns={buildDescriptions(TenantEntity, intl)}
      detailsComponent={(data) => <TenantProductViewTabs tenant={data} />}
    />
  );
};

export default TenantViewPage;
