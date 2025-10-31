import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { RoleEntity } from '@/components/TableEntities/RoleEntity';
import type { Role } from '@/services/Sys/Role/data';
import { deleteRole, getRoleById } from '@/services/Sys/Role/service';

const RoleViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Role>
      title={intl.formatMessage({ id: 'page.sys.role.view' })}
      description={intl.formatMessage({ id: 'page.sys.role.view' })}
      getById={getRoleById}
      deleteById={deleteRole}
      editUrl="/sys/role/edit"
      listUrl="/sys/role"
      columns={buildDescriptions(RoleEntity, intl)}
    />
  );
};

export default RoleViewPage;
