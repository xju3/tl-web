import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/TableEntities/Builder';
import { CabinetCableEntity } from '@/components/TableEntities/CabinetCableEntity';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import { getCabinetCables } from '@/services/Device/Cabinet/service';

export type CabinetCableSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (cable: CabinetCable) => void;
};

const columns = (intl: any): CustomProColumns<CabinetCable>[] =>
  buildSelectors(CabinetCableEntity, intl);

const CabinetCableSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetCableSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<CabinetCable>
      title={intl.formatMessage({ id: 'device.cabinet.cables.select' })}
      headerTitle={intl.formatMessage({ id: 'device.cabinet.cables' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={(params) => getCabinetCables(cabinetId, params)}
      columns={selectorColumns}
    />
  );
};

export default CabinetCableSelector;
