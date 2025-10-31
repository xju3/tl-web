import type { ProColumns } from '@ant-design/pro-components';
import SelectModal from '@/components/Common/SelectModal';
import type { Peripheral } from '../../services/Device/Peripheral/data';
import { getPeripherals } from '../../services/Device/Peripheral/service';

export type PeripheralSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (peripheral: Peripheral) => void;
};

const PeripheralSelectModal = ({
  open,
  onCancel,
  onSelect,
}: PeripheralSelectModalProps) => {
  const columns: ProColumns<Peripheral>[] = [
    {
      title: '编码',
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
    },
  ];

  return (
    <SelectModal<Peripheral>
      title="选择外设"
      headerTitle="外设列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getPeripherals}
      columns={columns}
    />
  );
};

export default PeripheralSelectModal;
