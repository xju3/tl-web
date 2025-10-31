import { useIntl } from '@umijs/max';
import SelectModal from '@/components/Common/SelectModal';
import { columns as cabinetColumns } from '@/components/TableColumns/Pages/CabinetColumns';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { getCabinets } from '@/services/Device/Cabinet/service';

export type CabinetSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (cabinet: any) => void;
};

const CabinetSelectModal = ({
  open,
  onCancel,
  onSelect,
}: CabinetSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = cabinetColumns(() => {}, intl).filter(
    (c) => c.selector,
  );

  return (
    <SelectModal<Cabinet>
      title={intl.formatMessage({ id: 'device.product.item.select-device' })}
      headerTitle={intl.formatMessage({ id: 'device.cabinet.list.title' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getCabinets}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default CabinetSelectModal;
