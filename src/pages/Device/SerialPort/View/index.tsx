import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { SerialPortEntity } from '@/components/TableEntities/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import {
  deleteSerialPort,
  getSerialPortById,
} from '@/services/Device/SerialPort/service';

const SerialPortViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<SerialPort>
      title={intl.formatMessage({ id: 'device.serial-port.view' })}
      description={intl.formatMessage({ id: 'device.host.basic-info.title' })}
      getById={getSerialPortById}
      deleteById={deleteSerialPort}
      editUrl="/device/serial-port/edit"
      listUrl="/device/serial-ports"
      columns={buildDescriptions(SerialPortEntity, intl)}
      gutter={3}
    />
  );
};

export default SerialPortViewPage;
