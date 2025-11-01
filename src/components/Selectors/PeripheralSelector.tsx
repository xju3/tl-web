import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { PeripheralEntity } from '@/components/Entities/PeripheralEntity';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import { getPeripherals } from '@/services/Device/Peripheral/service';

export type PeripheralSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (peripheral: Peripheral) => void;
};

const columns = (intl: any): CustomProColumns<Peripheral>[] =>
  buildSelectors(PeripheralEntity, intl);

const PeripheralSelector = ({
  open,
  onCancel,
  onSelect,
}: PeripheralSelectModalProps) => {
  const intl = useIntl();

  const selectorColumns = columns(intl);

  return (
    <SelectModal<Peripheral>
      title={intl.formatMessage({ id: 'device.peripheral.selector' })}
      headerTitle={intl.formatMessage({ id: 'device.peripheral.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getPeripherals}
      columns={selectorColumns}
    />
  );
};

export default PeripheralSelector;
