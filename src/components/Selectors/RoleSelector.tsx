import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { RoleEntity } from '@/components/Entities/Sys/RoleEntity';
import type { Role } from '@/services/Sys/Role/data';
import { getRoles } from '@/services/Sys/Role/service';

export type RoleSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (product: Role) => void;
};

const columns = (intl: any): CustomProColumns<Role>[] =>
  buildSelectors(RoleEntity, intl);

const RoleSelector = ({ open, onCancel, onSelect }: RoleSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<Role>
      title={intl.formatMessage({ id: 'sys.role.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getRoles}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default RoleSelector;
