import { useIntl } from '@umijs/max';
import { columns as serialPortColumns } from '@/components/Columns/Pages/SerialPortColumns';
import SelectModal from '@/components/Common/SelectModal';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import { getSerialPorts } from '@/services/Device/SerialPort/service';

export type SerialPortSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (id: string) => void;
};

const SerialPortSelectModal = ({
  open,
  onCancel,
  onSelect,
}: SerialPortSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = serialPortColumns(() => {}, intl).filter(
    (c) => c.selector,
  );

  return (
    <SelectModal<SerialPort>
      title="选择串口"
      headerTitle="串口列表"
      open={open}
      onCancel={onCancel}
      onSelect={(record) => onSelect(record.id)}
      request={getSerialPorts}
      columns={selectorColumns}
    />
  );
};

export default SerialPortSelectModal;
