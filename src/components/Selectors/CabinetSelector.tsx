import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { CabinetEntity } from '@/components/Entities/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { getCabinets } from '@/services/Device/Cabinet/service';

export type CabinetSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (cabinet: Cabinet) => void;
};

const columns = (intl: any): CustomProColumns<Cabinet>[] =>
  buildSelectors(CabinetEntity, intl);

const CabinetSelector = ({
  open,
  onCancel,
  onSelect,
}: CabinetSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<Cabinet>
      title={intl.formatMessage({ id: 'device.product.item.selector' })}
      headerTitle={intl.formatMessage({ id: 'device.cabinet.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getCabinets}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default CabinetSelector;
