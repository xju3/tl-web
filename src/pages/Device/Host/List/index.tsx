import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { HostEntity } from '@/components/TableEntities/HostEntity';
import type { Host } from '@/services/Device/Host/data';
import { deleteHost, getHosts } from '@/services/Device/Host/service';

const SESSION_KEY = 'hostListState';

const HostListPage = () => {
  const services = {
    getList: getHosts,
    deleteItem: deleteHost,
  };

  const routes = {
    add: '/device/hosts/add',
    edit: '/device/hosts/edit',
    view: '/device/hosts/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Host>[] => buildTableColumns(HostEntity, intl);

  return (
    <ListPage<Host>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default HostListPage;
