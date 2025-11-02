import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { CabinetEntity } from '@/components/Entities/Device/CabinetEntity';
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

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Cabinet>[] => buildTableColumns(CabinetEntity, intl);

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
