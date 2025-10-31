import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { deleteCabinet, getCabinets } from '@/services/Device/Cabinet/service';

const SESSION_KEY = 'cabinetListState';

const CabinetListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Cabinet>[] => [
    {
      title: intl.formatMessage({ id: 'device.cabinet.code' }),
      dataIndex: 'code',
      key: 'code',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.name' }),
      dataIndex: 'name',
      key: 'name',
      sorter: {
        multiple: 2,
      },
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.description' }),
      dataIndex: 'description',
      key: 'description',
    },
  ];

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
