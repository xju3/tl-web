import ListPage from '@/components/Common/Pages/List';
import { columns } from '@/components/TableColumns/Pages/SerialPortColumns';
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
