import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { PeripheralEntity } from '@/components/TableEntities/PeripheralEntity';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import { getPeripherals } from '@/services/Device/Peripheral/service';

export type PeripheralSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (peripheral: Peripheral) => void;
};

const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Peripheral>[] => buildTableColumns(PeripheralEntity, intl);

const PeripheralSelectModal = ({
  open,
  onCancel,
  onSelect,
}: PeripheralSelectModalProps) => {
  const intl = useIntl();

  const selectorColumns = columns(() => {}, intl).filter((c) => c.selector);

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
