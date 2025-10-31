import type { ProColumns } from '@ant-design/pro-components';
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
  const columns: ProColumns<SerialPort>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '端口',
      dataIndex: 'port',
      sorter: true,
    },
  ];

  return (
    <SelectModal<SerialPort>
      title="选择串口"
      headerTitle="串口列表"
      open={open}
      onCancel={onCancel}
      onSelect={(record) => onSelect(record.id)}
      request={getSerialPorts}
      columns={columns}
    />
  );
};

export default SerialPortSelectModal;
