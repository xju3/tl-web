import type { ProColumns } from '@ant-design/pro-components';
import SelectModal from '@/components/Common/SelectModal';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import { getCabinetCables } from '@/services/Device/Cabinet/service';

export type CabinetCableSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (cable: CabinetCable) => void;
};

const CabinetCableSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetCableSelectorProps) => {
  const columns: ProColumns<CabinetCable>[] = [
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
    <SelectModal<CabinetCable>
      title="选择线缆"
      headerTitle="线缆列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={(params) => getCabinetCables(cabinetId, params)}
      columns={columns}
    />
  );
};

export default CabinetCableSelector;
