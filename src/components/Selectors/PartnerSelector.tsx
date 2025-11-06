import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { PartnerEntity } from '@/components/Entities/Org/PartnerEntity';
import type { Partner } from '@/services/Org/Partner/data';
import { getPartners } from '@/services/Org/Partner/service';

export type PartnerSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (product: Partner) => void;
};

const columns = (intl: any): CustomProColumns<Partner>[] =>
  buildSelectors(PartnerEntity, intl);

const PartnerSelector = ({
  open,
  onCancel,
  onSelect,
}: PartnerSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<Partner>
      title={intl.formatMessage({ id: 'org.partner.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getPartners}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default PartnerSelector;
