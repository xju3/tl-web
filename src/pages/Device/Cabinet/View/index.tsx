import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { CabinetEntity } from '@/components/Entities/Device/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import {
  deleteCabinet,
  getCabinetById,
} from '@/services/Device/Cabinet/service';
import CabinetViewTabs from '../../../../components/ViewTabs/CabinetViewTabs';

const CabinetViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Cabinet>
      title={intl.formatMessage({ id: 'device.cabinet.view.title' })}
      description={(cabinet) => cabinet.name}
      getById={getCabinetById}
      deleteById={deleteCabinet}
      editUrl="/device/cabinets/edit"
      listUrl="/device/cabinets"
      columns={buildDescriptions(CabinetEntity, intl)}
      detailsComponent={(cabinet) => <CabinetViewTabs cabinet={cabinet} />}
    />
  );
};

export default CabinetViewPage;
