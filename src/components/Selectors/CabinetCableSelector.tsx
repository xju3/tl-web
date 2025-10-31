import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetCableEntity } from '@/components/TableEntities/CabinetCableEntity';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import { getCabinetCables } from '@/services/Device/Cabinet/service';

export type CabinetCableSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (cable: CabinetCable) => void;
};

const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<CabinetCable>[] =>
  buildTableColumns(CabinetCableEntity, intl);

const CabinetCableSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetCableSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(() => {}, intl).filter((c) => c.selector);

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
