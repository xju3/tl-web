import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import TenantProductViewTabs from '@/components/ViewTabs/TenantProductViewTabs';
import type { Tenant } from '@/services/Org/Tenant/data';
import { deleteTenant, getTenantById } from '@/services/Org/Tenant/service';

const TenantViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<Tenant>[] = [
    {
      title: intl.formatMessage({ id: 'page.org.company.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'page.org.company.code' }),
      dataIndex: 'code',
    },
  ];

  return (
    <ViewPage<Tenant>
      title={intl.formatMessage({ id: 'page.org.company.view' })}
      description={intl.formatMessage({ id: 'page.org.company.view' })}
      getById={getTenantById}
      deleteById={deleteTenant}
      editUrl="/org/company/edit"
      listUrl="/org/company"
      columns={columns}
      detailsComponent={(data) => <TenantProductViewTabs tenant={data} />}
    />
  );
};

export default TenantViewPage;
