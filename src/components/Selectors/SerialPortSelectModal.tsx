import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { SerialPortEntity } from '@/components/TableEntities/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import { getSerialPorts } from '@/services/Device/SerialPort/service';

export type SerialPortSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (id: string) => void;
};

const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<SerialPort>[] => buildTableColumns(SerialPortEntity, intl);

const SerialPortSelectModal = ({
  open,
  onCancel,
  onSelect,
}: SerialPortSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(() => {}, intl).filter((c) => c.selector);

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
