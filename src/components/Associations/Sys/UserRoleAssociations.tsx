import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { UserRoleEntity } from '@/components/Entities/Sys/UserRoleEntity';
import type { UserRole } from '@/services/Sys/User/data';
import { deleteUserRoleById, getUserRoles } from '@/services/Sys/User/service';

type ItemsProps = {
  userId: string;
};

const columns = (intl: IntlShape): CustomProColumns<UserRole>[] =>
  buildTableColumns(UserRoleEntity, intl);

const UserRoleAssociations: React.FC<ItemsProps> = ({ userId }) => {
  const intl = useIntl();

  return (
    <AssociationList<UserRole>
      parentId={userId}
      services={{
        getPage: getUserRoles,
        deleteItem: deleteUserRoleById,
      }}
      columns={columns(intl)}
      addRoute={`/sys/users/${userId}/roles/add`}
      editRoutePattern={`/sys/users/${userId}/roles/:id/edit`}
      pagination={true}
      showIndexColumn={false}
    />
  );
};

export default UserRoleAssociations;
