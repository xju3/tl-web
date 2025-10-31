import { useIntl } from '@@/exports';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetPeripheralEntity } from '@/components/TableEntities/CabinetPeripheralEntity';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import { getPeripheralsByCabinetId } from '@/services/Device/Cabinet/service';

export type CabinetPeripheralSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (peripheral: CabinetPeripheral) => void;
};

const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<CabinetPeripheral>[] =>
  buildTableColumns(CabinetPeripheralEntity, intl);

const CabinetPeripheralSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetPeripheralSelectorProps) => {
  const intl = useIntl();

  const selectorColumns = columns(() => {}, intl).filter((c) => c.selector);

  return (
    <SelectModal<CabinetPeripheral>
      title="选择机柜外设"
      headerTitle="机柜外设列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={(params) => getPeripheralsByCabinetId(cabinetId, params)}
      columns={selectorColumns}
    />
  );
};

export default CabinetPeripheralSelector;
