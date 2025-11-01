import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { UserEntity } from '@/components/Entities/UserEntity';
import type { User } from '@/services/Sys/User/data';
import { deleteUser, getUserById } from '@/services/Sys/User/service';

const UserViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<User>
      title={intl.formatMessage({ id: 'sys.user.view' })}
      description={intl.formatMessage({ id: 'sys.user.view' })}
      getById={getUserById}
      deleteById={deleteUser}
      editUrl="/sys/user/edit"
      listUrl="/sys/user"
      columns={buildDescriptions(UserEntity, intl)}
    />
  );
};

export default UserViewPage;
