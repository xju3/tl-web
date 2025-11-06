import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { UserEntity } from '@/components/Entities/Sys/UserEntity';
import type { User } from '@/services/Sys/User/data';
import { addUser, getUserById, updateUser } from '@/services/Sys/User/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<User>>;
}

const EditForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return <>{buildFormFields<User>(UserEntity, intl, formRef)}</>;
};

const UserEditPage = () => {
  const services = {
    addItem: addUser,
    updateItem: updateUser,
    getItemById: getUserById,
  };

  return (
    <EditPage<User> services={services}>
      <EditForm />
    </EditPage>
  );
};

export default UserEditPage;
