import { columns } from '@/components/Columns/Pages/CabinetColumns';
import ListPage from '@/components/Common/Pages/List';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { deleteCabinet, getCabinets } from '@/services/Device/Cabinet/service';

const SESSION_KEY = 'cabinetListState';

const CabinetListPage = () => {
  const services = {
    getList: getCabinets,
    deleteItem: deleteCabinet,
  };

  const routes = {
    add: '/device/cabinets/add',
    edit: '/device/cabinets/edit',
    view: '/device/cabinets/view',
  };

  const extraActions = (
    saveStateAndNavigate: (path: string) => void,
    record: Cabinet,
    intl: any,
  ) => [
    <a
      key="create"
      onClick={() =>
        saveStateAndNavigate(`/device/cabinets/add-child/${record.id}`)
      }
    >
      {intl.formatMessage({ id: 'common.actions.add' })}
    </a>,
  ];

  return (
    <ListPage<Cabinet>
      services={services}
      columns={columns}
      showIndexColumn={false}
      routes={routes}
      sessionKey={SESSION_KEY}
      extraActions={extraActions}
    />
  );
};

export default CabinetListPage;
