import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { User } from '@/services/Sys/User/data';
import { deleteUser, getUserById } from '@/services/Sys/User/service';

const UserViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<User>[] = [
    {
      title: intl.formatMessage({ id: 'page.sys.user.username' }),
      dataIndex: 'username',
    },
    {
      title: intl.formatMessage({ id: 'page.sys.user.employeeId' }),
      dataIndex: 'employeeId',
    },
  ];

  return (
    <ViewPage<User>
      title={intl.formatMessage({ id: 'page.sys.user.view' })}
      description={intl.formatMessage({ id: 'page.sys.user.view' })}
      getById={getUserById}
      deleteById={deleteUser}
      editUrl="/sys/user/edit"
      listUrl="/sys/user"
      columns={columns}
    />
  );
};

export default UserViewPage;
