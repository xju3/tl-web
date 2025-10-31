import type { ProColumns } from '@ant-design/pro-components';
import SelectModal from '@/components/Common/SelectModal';
import { getPeripheralsByCabinetId } from '@/services/Device/Cabinet/service';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export type CabinetPeripheralSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (peripheral: Peripheral) => void;
};

const CabinetPeripheralSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetPeripheralSelectorProps) => {
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
      title="选择机柜外设"
      headerTitle="机柜外设列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={(params) => getPeripheralsByCabinetId(cabinetId, params)}
      columns={columns}
    />
  );
};

export default CabinetPeripheralSelector;
