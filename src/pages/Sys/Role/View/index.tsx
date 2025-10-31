import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/CommonPages/View';
import type { Role } from '@/services/Sys/Role/data';
import { deleteRole, getRoleById } from '@/services/Sys/Role/service';

const RoleViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<Role>[] = [
    {
      title: intl.formatMessage({ id: 'page.sys.role.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'page.sys.role.code' }),
      dataIndex: 'code',
    },
  ];

  return (
    <ViewPage<Role>
      title={intl.formatMessage({ id: 'page.sys.role.view' })}
      description={intl.formatMessage({ id: 'page.sys.role.view' })}
      getById={getRoleById}
      deleteById={deleteRole}
      editUrl="/sys/role/edit"
      listUrl="/sys/role"
      columns={columns}
    />
  );
};

export default RoleViewPage;
