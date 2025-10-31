import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import {
  deletePeripheral,
  getPeripherals,
} from '@/services/Device/Peripheral/service';

const SESSION_KEY = 'peripheralListState';

const PeripheralListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Peripheral>[] => [
    {
      title: intl.formatMessage({ id: 'device.peripheral.code' }),
      dataIndex: 'code',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.name' }),
      dataIndex: 'name',
      sorter: {
        multiple: 2,
      },
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.type' }),
      dataIndex: 'type',
      sorter: {
        multiple: 3,
      },
    },
  ];

  const services = {
    getList: getPeripherals,
    deleteItem: deletePeripheral,
  };

  const routes = {
    add: '/device/peripherals/add',
    edit: '/device/peripherals/edit',
    view: '/device/peripherals/view',
  };

  return (
    <ListPage<Peripheral>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default PeripheralListPage;
