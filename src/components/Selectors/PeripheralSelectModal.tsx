import { useIntl } from '@umijs/max';
import { columns as peripheralColumns } from '@/components/Columns/Pages/PeripheralColumns';
import SelectModal from '@/components/Common/SelectModal';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import { getPeripherals } from '@/services/Device/Peripheral/service';

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
  const intl = useIntl();
  const selectorColumns = peripheralColumns(() => {}, intl).filter(
    (c) => c.selector,
  );

  return (
    <SelectModal<Peripheral>
      title="选择外设"
      headerTitle="外设列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getPeripherals}
      columns={selectorColumns}
    />
  );
};

export default PeripheralSelectModal;
