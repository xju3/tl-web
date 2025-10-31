import { useIntl } from '@umijs/max';
import { columns as cabinetCableColumns } from '@/components/Columns/Pages/CabinetCableColunms';
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
  const intl = useIntl();
  const selectorColumns = cabinetCableColumns(() => {}, intl).filter(
    (c) => c.selector,
  );

  return (
    <SelectModal<CabinetCable>
      title="选择线缆"
      headerTitle="线缆列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={(params) => getCabinetCables(cabinetId, params)}
      columns={selectorColumns}
    />
  );
};

export default CabinetCableSelector;
