import React from 'react';
import { columns } from '@/components/Columns/Pages/EmployeeColumns';
import ListPage from '@/components/Common/Pages/List';
import type { Employee } from '@/services/Org/Employee/data';
import { deleteEmployee, getEmployees } from '@/services/Org/Employee/service';

const SESSION_KEY = 'employeeListState';

const EmployeeListPage = () => {
  const services = {
    getList: getEmployees,
    deleteItem: deleteEmployee,
  };

  const routes = {
    add: '/org/employee/add',
    edit: '/org/employee/edit',
    view: '/org/employee/view',
  };

  return (
    <ListPage<Employee>
      services={services}
      columns={columns}
      routes={routes}
      showIndexColumn={true}
      sessionKey={SESSION_KEY}
    />
  );
};

export default EmployeeListPage;
