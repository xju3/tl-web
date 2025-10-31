import React from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Employee } from '@/services/Org/Employee/data';
import { deleteEmployee, getEmployees } from '@/services/Org/Employee/service';

const SESSION_KEY = 'employeeListState';

const EmployeeListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Employee>[] => [
    {
      title: intl.formatMessage({ id: 'page.org.employee.code' }),
      dataIndex: 'code',
      valueType: 'text',
      sorter: {
        multiple: 2,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.org.employee.name' }),
      dataIndex: 'name',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },

    {
      title: intl.formatMessage({ id: 'page.org.employee.gender' }),
      dataIndex: 'gender',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.org.employee.email' }),
      dataIndex: 'email',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.org.employee.mobile' }),
      dataIndex: 'mobile',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
  ];

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
