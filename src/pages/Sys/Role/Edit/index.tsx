import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { RoleEntity } from '@/components/Entities/Sys/RoleEntity';
import type { Role } from '@/services/Sys/Role/data.d';
import { addRole, getRoleById, updateRole } from '@/services/Sys/Role/service';

const RoleForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Role>(RoleEntity, intl)}</>;
};

const RoleEditPage = () => {
  const services = {
    addItem: addRole,
    updateItem: updateRole,
    getItemById: getRoleById,
  };

  const backRoute = '/sys/role';

  return (
    <EditPage<Role> services={services} backRoute={backRoute}>
      <RoleForm />
    </EditPage>
  );
};

export default RoleEditPage;
