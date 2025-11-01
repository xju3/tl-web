import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { PeripheralEntity } from '@/components/Entities/PeripheralEntity';
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

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Peripheral>[] =>
    buildTableColumns(PeripheralEntity, intl);

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
