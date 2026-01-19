import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { UserEntity } from '@/components/Entities/Sys/UserEntity';
import UserViewTabs from '@/components/ViewTabs/UserViewTabs';
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
      editUrl="/sys/users/edit"
      listUrl="/sys/users"
      columns={buildDescriptions(UserEntity, intl)}
      detailsComponent={(user) => <UserViewTabs user={user} />}
    />
  );
};

export default UserViewPage;
