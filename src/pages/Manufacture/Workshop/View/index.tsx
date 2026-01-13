import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { WorkshopEntity } from '@/components/Entities/Manufacture/WorkshopEntity';
import type { Workshop } from '@/services/Manufacture/Workshop/data';
import {
  deleteWorkshop,
  getWorkshopById,
} from '@/services/Manufacture/Workshop/service';

const WorkshopViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Workshop>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getWorkshopById}
      deleteById={deleteWorkshop}
      editUrl="/manufacture/workshop/edit"
      listUrl="/manufacture/workshops"
      columns={buildDescriptions(WorkshopEntity, intl)}
    />
  );
};

export default WorkshopViewPage;
