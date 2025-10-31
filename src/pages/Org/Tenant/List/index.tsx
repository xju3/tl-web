import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { TenantEntity } from '@/components/TableEntities/TenantEntity';
import type { Tenant } from '@/services/Org/Tenant/data';
import { deleteTenant, getTenants } from '@/services/Org/Tenant/service';

const SESSION_KEY = 'tenantListState';

const TenantListPage = () => {
  const services = {
    getList: getTenants,
    deleteItem: deleteTenant,
  };

  const routes = {
    add: '/org/tenant/add',
    edit: '/org/tenant/edit',
    view: '/org/tenant/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Tenant>[] => buildTableColumns(TenantEntity, intl);

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
