import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import DepartmentFormFields from '@/components/FormFields/DepartmentFormFields';
import type { Department } from '@/services/Org/Department/data';
import {
  addDepartment,
  getDepartmentById,
  updateDepartment,
} from '@/services/Org/Department/service';

const DepartmentForm: React.FC = () => {
  return <DepartmentFormFields />;
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
