import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { UserRoleEntity } from '@/components/Entities/Sys/UserRoleEntity';
import type { UserRole } from '@/services/Sys/User/data';
import {
  createUserRole,
  getUserRoleById,
  updateUserRole,
} from '@/services/Sys/User/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<UserRole>>;
}

const UserRoleForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return <>{buildFormFields<UserRole>(UserRoleEntity, intl, formRef)}</>;
};

const UserRoleBindPage: React.FC = () => {
  const services = {
    addItem: createUserRole,
    updateItem: updateUserRole,
    getItemById: getUserRoleById,
  };

  return (
    <EditPage<UserRole> services={services}>
      <UserRoleForm />
    </EditPage>
  );
};

export default UserRoleBindPage;
