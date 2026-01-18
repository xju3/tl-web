import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { EmployeeEntity } from '@/components/Entities/Org/EmployeeEntity';
import type { Employee } from '@/services/Org/Employee/data';
import {
  addEmployee,
  getEmployeeById,
  updateEmployee,
} from '@/services/Org/Employee/service';

const EmployeeForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<Employee>(EmployeeEntity, intl)}</>;
};

const EmployeeEditPage = () => {
  const services = {
    addItem: addEmployee,
    updateItem: updateEmployee,
    getItemById: getEmployeeById,
  };

  const backRoute = '/org/employees';

  return (
    <EditPage<Employee> services={services} backRoute={backRoute}>
      <EmployeeForm />
    </EditPage>
  );
};

export default EmployeeEditPage;
