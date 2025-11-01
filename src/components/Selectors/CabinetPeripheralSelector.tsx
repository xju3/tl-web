import { useIntl } from '@@/exports';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { CabinetPeripheralEntity } from '@/components/Entities/CabinetPeripheralEntity';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import { getPeripheralsByCabinetId } from '@/services/Device/Cabinet/service';

export type CabinetPeripheralSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (peripheral: CabinetPeripheral) => void;
};

const columns = (intl: any): CustomProColumns<CabinetPeripheral>[] =>
  buildSelectors(CabinetPeripheralEntity, intl);

const CabinetPeripheralSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetPeripheralSelectorProps) => {
  const intl = useIntl();

  const selectorColumns = columns(intl);

  return (
    <SelectModal<CabinetPeripheral>
      title={intl.formatMessage({ id: 'device.cabinet.peripheral.selector' })}
      headerTitle={intl.formatMessage({ id: 'device.cabinet.peripheral.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={(params) => getPeripheralsByCabinetId(cabinetId, params)}
      columns={selectorColumns}
    />
  );
};

export default CabinetPeripheralSelector;
