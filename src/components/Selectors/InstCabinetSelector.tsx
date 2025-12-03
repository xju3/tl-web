import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { InstCabinetEntity } from '@/components/Entities/Inst/InstCabinetEntity';
import type { InstCabinet } from '@/services/Inst/Cabinet/data';
import { getInstCabinets } from '@/services/Inst/Cabinet/service';

export type InstCabinetSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (cabinet: InstCabinet) => void;
};

const columns = (intl: any): CustomProColumns<InstCabinet>[] =>
  buildSelectors(InstCabinetEntity, intl);

const InstCabinetSelector = ({
  open,
  onCancel,
  onSelect,
}: InstCabinetSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<InstCabinet>
      title={intl.formatMessage({ id: 'common.selector' })}
      headerTitle={intl.formatMessage({ id: 'device.cabinet.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getInstCabinets}
      columns={selectorColumns}
      intl={intl}
      showIndex={false}
    />
  );
};

export default InstCabinetSelector;
