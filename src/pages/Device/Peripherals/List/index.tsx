import ListPage from '@/components/Common/Pages/List';
import { columns } from '@/components/TableColumns/Pages/PeripheralColumns';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import {
  deletePeripheral,
  getPeripherals,
} from '@/services/Device/Peripheral/service';

const SESSION_KEY = 'peripheralListState';

const PeripheralListPage = () => {
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
