import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { HostEntity } from '@/components/Entities/Device/HostEntity';
import type { Host } from '@/services/Device/Host/data';
import { deleteHost, getHostById } from '@/services/Device/Host/service';
import HostViewTabs from '../../../../components/ViewTabs/HostViewTabs';

const HostViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Host>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getHostById}
      deleteById={deleteHost}
      editUrl="/device/hosts/edit"
      listUrl="/device/hosts"
      columns={buildDescriptions(HostEntity, intl)}
      detailsComponent={(host) => <HostViewTabs host={host} />}
    />
  );
};

export default HostViewPage;
