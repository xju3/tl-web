import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { SerialPortEntity } from '@/components/Entities/Device/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import { getSerialPorts } from '@/services/Device/SerialPort/service';

export type SerialPortSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (serialPort: SerialPort) => void;
};

const columns = (intl: any): CustomProColumns<SerialPort>[] =>
  buildSelectors(SerialPortEntity, intl);

const SerialPortSelector = ({
  open,
  onCancel,
  onSelect,
}: SerialPortSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<SerialPort>
      title={intl.formatMessage({ id: 'device.serial-port.selector' })}
      headerTitle={intl.formatMessage({ id: 'device.serial-port.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={(record) => onSelect(record)}
      request={getSerialPorts}
      columns={selectorColumns}
    />
  );
};

export default SerialPortSelector;
