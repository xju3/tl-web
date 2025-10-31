import ListPage from '@/components/CommonPages/List';
import type { CustomProColumns } from '@/components/CommonPages/List/typing';
import type { Tenant } from '@/services/Org/Tenant/data';
import { deleteTenant, getTenants } from '@/services/Org/Tenant/service';

const SESSION_KEY = 'tenantListState';

const TenantListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Tenant>[] => [
    {
      title: intl.formatMessage({ id: 'page.org.tenant.name' }),
      dataIndex: 'name',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.org.tenant.code' }),
      dataIndex: 'code',
      valueType: 'text',
      sorter: {
        multiple: 2,
      },
    },
  ];

  const services = {
    getList: getTenants,
    deleteItem: deleteTenant,
  };

  const routes = {
    add: '/org/tenant/add',
    edit: '/org/tenant/edit',
    view: '/org/tenant/view',
  };

  return (
    <ListPage<Tenant>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default TenantListPage;
