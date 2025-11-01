import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/TableEntities/Builder';
import { DepartmentEntity } from '@/components/TableEntities/DepartmentEntity';
import type { Department } from '@/services/Org/Department/data';
import {
  addDepartment,
  getDepartmentById,
  updateDepartment,
} from '@/services/Org/Department/service';

const DepartmentForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Department>(DepartmentEntity, intl)}</>;
};

const DepartmentEditPage = () => {
  const services = {
    addItem: addDepartment,
    updateItem: updateDepartment,
    getItemById: getDepartmentById,
  };

  const backRoute = '/org/department';

  return (
    <EditPage<Department> services={services} backRoute={backRoute}>
      <DepartmentForm />
    </EditPage>
  );
};

export default DepartmentEditPage;
