import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { InstCabinetEntity } from '@/components/Entities/Inst/InstCabinetEntity';
import type { InstCabinet } from '@/services/Inst/Cabinet/data';
import { getInstCabinetById } from '@/services/Inst/Cabinet/service';

const InstCabinetViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<InstCabinet>
      title={intl.formatMessage({ id: 'device.cabinet.view.title' })}
      description={(cabinet) => cabinet.name}
      getById={getInstCabinetById}
      editUrl="/inst/cabinets/edit"
      listUrl="/inst/cabinets"
      columns={buildDescriptions(InstCabinetEntity, intl)}
    />
  );
};

export default InstCabinetViewPage;
