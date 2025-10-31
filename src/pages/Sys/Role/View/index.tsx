import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { RoleDescriptions } from '@/components/Descriptions/RoleDescriptions';
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
      columns={RoleDescriptions(intl)}
    />
  );
};

export default RoleViewPage;
