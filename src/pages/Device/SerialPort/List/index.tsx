import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  deleteSerialPort,
  getSerialPorts,
} from '@/services/Device/SerialPort/service';

const SESSION_KEY = 'peripheralListState';

const SerialPortListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<SerialPort>[] => [
    {
      title: intl.formatMessage({ id: 'device.serial-port.code' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.name' }),
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.protocol' }),
      dataIndex: 'protocol',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.baudRate' }),
      dataIndex: 'baudRate',
      width: '120px',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.dataBits' }),
      dataIndex: 'dataBits',
      width: '120px',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.stopBits' }),
      dataIndex: 'stopBits',
      width: '120px',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.parity' }),
      dataIndex: 'parity',
      width: '120px',
      sorter: true,
    },
  ];

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
