import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/TableEntities/Builder';
import { SerialPortEntity } from '@/components/TableEntities/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import { getSerialPorts } from '@/services/Device/SerialPort/service';

export type SerialPortSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (id: string) => void;
};

const columns = (intl: any): CustomProColumns<SerialPort>[] =>
  buildSelectors(SerialPortEntity, intl);

const SerialPortSelectModal = ({
  open,
  onCancel,
  onSelect,
}: SerialPortSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

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
