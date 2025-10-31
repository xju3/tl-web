import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { Host } from '@/services/Device/Host/data';
import { deleteHost, getHostById } from '@/services/Device/Host/service';
import HostViewTabs from '../../../../components/ViewTabs/HostViewTabs';

const HostViewPage = () => {
  const intl = useIntl();

  const columns = [
    {
      dataIndex: 'code',
      title: intl.formatMessage({ id: 'device.host.code' }),
    },
    {
      dataIndex: 'name',
      title: intl.formatMessage({ id: 'device.host.name' }),
    },
    {
      dataIndex: 'ip',
      title: intl.formatMessage({ id: 'common.ip' }),
    },
  ];

  return (
    <ViewPage<Host>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getHostById}
      deleteById={deleteHost}
      editUrl="/device/hosts/edit"
      listUrl="/device/hosts"
      columns={columns}
      detailsComponent={(host) => <HostViewTabs host={host} />}
    />
  );
};

export default HostViewPage;
