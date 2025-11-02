import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { EmployeeEntity } from '@/components/Entities/Org/EmployeeEntity';
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

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Employee>[] => buildTableColumns(EmployeeEntity, intl);

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
