import { columns } from '@/components/Columns/Pages/HostColumns';
import ListPage from '@/components/Common/Pages/List';
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
