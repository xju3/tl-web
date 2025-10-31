import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import {
  deleteCabinet,
  getCabinetById,
} from '@/services/Device/Cabinet/service';
import CabinetViewTabs from '../../../../components/ViewTabs/CabinetViewTabs';

const CabinetViewPage = () => {
  const intl = useIntl();

  const columns = [
    {
      dataIndex: 'code',
      title: intl.formatMessage({ id: 'device.cabinet.code' }),
    },
    {
      dataIndex: 'name',
      title: intl.formatMessage({ id: 'device.cabinet.name' }),
    },
  ];

  return (
    <ViewPage<Cabinet>
      title={intl.formatMessage({ id: 'device.cabinet.view.title' })}
      description={(cabinet) => cabinet.name}
      getById={getCabinetById}
      deleteById={deleteCabinet}
      editUrl="/device/cabinets/edit"
      listUrl="/device/cabinets"
      columns={columns}
      detailsComponent={(cabinet) => <CabinetViewTabs cabinet={cabinet} />}
    />
  );
};

export default CabinetViewPage;
