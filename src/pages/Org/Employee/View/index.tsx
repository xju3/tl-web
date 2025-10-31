import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { Employee } from '@/services/Org/Employee/data';
import {
  deleteEmployee,
  getEmployeeById,
} from '@/services/Org/Employee/service';

const EmployeeViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<Employee>[] = [
    {
      title: intl.formatMessage({ id: 'org.employee.personId' }),
      dataIndex: 'personId',
    },
    {
      title: intl.formatMessage({ id: 'org.employee.employeeNumber' }),
      dataIndex: 'employeeNumber',
    },
  ];

  return (
    <ViewPage<Employee>
      title={intl.formatMessage({ id: 'org.employee.view' })}
      description={intl.formatMessage({ id: 'org.employee.view' })}
      getById={getEmployeeById}
      deleteById={deleteEmployee}
      editUrl="/org/employee/edit"
      listUrl="/org/employee"
      columns={columns}
    />
  );
};

export default EmployeeViewPage;
