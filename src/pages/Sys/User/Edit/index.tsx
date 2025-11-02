import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { UserEntity } from '@/components/Entities/Sys/UserEntity';
import { updateMenu } from '@/services/Sys/Menu/service';
import type { User } from '@/services/Sys/User/data';
import { addUser, getUserById } from '@/services/Sys/User/service';

const UserForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<User>(UserEntity, intl)}</>;
};

const UserEditPage = () => {
  const services = {
    addItem: addUser,
    updateItem: updateMenu,
    getItemById: getUserById,
  };

  const backRoute = '/sys/user';

  return (
    <EditPage<User> services={services} backRoute={backRoute}>
      <UserForm />
    </EditPage>
  );
};

export default UserEditPage;
