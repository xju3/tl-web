import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { RoleEntity } from '@/components/Entities/Sys/RoleEntity';
import type { Role } from '@/services/Sys/Role/data';
import { deleteRole, getRoleById } from '@/services/Sys/Role/service';

const RoleViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Role>
      title={intl.formatMessage({ id: 'sys.role.view' })}
      description={(role) => role.name}
      getById={getRoleById}
      deleteById={deleteRole}
      editUrl="/sys/roles/edit"
      listUrl="/sys/roles"
      columns={buildDescriptions(RoleEntity, intl)}
    />
  );
};

export default RoleViewPage;
