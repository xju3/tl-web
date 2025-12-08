import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { WorkgroupEntity } from '@/components/Entities/Manufacture/WorkgroupEntity';
import type { Workgroup } from '@/services/Manufacture/Workgroup/data';
import {
  deleteWorkgroup,
  getWorkgroupById,
} from '@/services/Manufacture/Workgroup/service';

const WorkgroupViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Workgroup>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getWorkgroupById}
      deleteById={deleteWorkgroup}
      editUrl="/device/hosts/edit"
      listUrl="/device/hosts"
      columns={buildDescriptions(WorkgroupEntity, intl)}
    />
  );
};

export default WorkgroupViewPage;
