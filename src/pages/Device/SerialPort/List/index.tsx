import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { SerialPortEntity } from '@/components/Entities/Device/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  deleteSerialPort,
  getSerialPorts,
} from '@/services/Device/SerialPort/service';

const SESSION_KEY = 'peripheralListState';

const SerialPortListPage = () => {
  const services = {
    getList: getSerialPorts,
    deleteItem: deleteSerialPort,
  };

  const routes = {
    add: '/device/serial-ports/add',
    edit: '/device/serial-ports/edit',
    view: '/device/serial-ports/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<SerialPort>[] =>
    buildTableColumns(SerialPortEntity, intl);

  return (
    <ListPage<SerialPort>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default SerialPortListPage;
