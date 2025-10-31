import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Host } from '@/services/Device/Host/data';
import { deleteHost, getHosts } from '@/services/Device/Host/service';

const SESSION_KEY = 'hostListState';

const HostListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Host>[] => [
    {
      title: intl.formatMessage({ id: 'device.host.code' }),
      dataIndex: 'code',
      key: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.host.name' }),
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'common.ip' }),
      dataIndex: 'ip',
      key: 'ip',
      sorter: true,
    },
  ];

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
