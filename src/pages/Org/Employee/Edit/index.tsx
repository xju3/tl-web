import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/CommonPages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Employee } from '@/services/Org/Employee/data';
import {
  addEmployee,
  getEmployeeById,
  updateEmployee,
} from '@/services/Org/Employee/service';
import { validationRules } from '@/utils/validation';

const EmployeeForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="personId"
        label={intl.formatMessage({ id: 'page.org.employee.personId' })}
      />
      <CustomProFormText
        name="employeeNumber"
        rules={[rules.required('page.org.employee.employeeNumber')]}
        label={intl.formatMessage({ id: 'page.org.employee.employeeNumber' })}
      />
    </>
  );
};

const EmployeeEditPage = () => {
  const services = {
    addItem: addEmployee,
    updateItem: updateEmployee,
    getItemById: getEmployeeById,
  };

  const backRoute = '/org/employee';

  return (
    <EditPage<Employee> services={services} backRoute={backRoute}>
      <EmployeeForm />
    </EditPage>
  );
};

export default EmployeeEditPage;
