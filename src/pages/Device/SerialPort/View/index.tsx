import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/CommonPages/View';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  deleteSerialPort,
  getSerialPortById,
} from '@/services/Device/SerialPort/service';

const SerialPortViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<SerialPort>[] = [
    {
      title: intl.formatMessage({ id: 'device.serial-port.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.protocol' }),
      dataIndex: 'protocol',
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.baudRate' }),
      dataIndex: 'baudRate',
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.dataBits' }),
      dataIndex: 'dataBits',
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.stopBits' }),
      dataIndex: 'stopBits',
    },
    {
      title: intl.formatMessage({ id: 'device.serial-port.parity' }),
      dataIndex: 'parity',
    },
    {
      title: intl.formatMessage({ id: 'common.description' }),
      dataIndex: 'description',
      span: 2,
    },
  ];

  return (
    <ViewPage<SerialPort>
      title={intl.formatMessage({ id: 'device.serial-port.view' })}
      description={intl.formatMessage({ id: 'device.host.basic-info.title' })}
      getById={getSerialPortById}
      deleteById={deleteSerialPort}
      editUrl="/device/serial-port/edit"
      listUrl="/device/serial-ports"
      columns={columns}
      gutter={3}
    />
  );
};

export default SerialPortViewPage;
