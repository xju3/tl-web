import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetEntity } from '@/components/TableEntities/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { getCabinets } from '@/services/Device/Cabinet/service';

export type CabinetSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (cabinet: any) => void;
};

const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Cabinet>[] => buildTableColumns(CabinetEntity, intl);

const CabinetSelectModal = ({
  open,
  onCancel,
  onSelect,
}: CabinetSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(() => {}, intl).filter((c) => c.selector);

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
