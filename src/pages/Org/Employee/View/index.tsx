import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { EmployeeEntity } from '@/components/Entities/Org/EmployeeEntity';
import type { Employee } from '@/services/Org/Employee/data';
import {
  deleteEmployee,
  getEmployeeById,
} from '@/services/Org/Employee/service';

const EmployeeViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Employee>
      title={intl.formatMessage({ id: 'org.employee.view' })}
      description={intl.formatMessage({ id: 'org.employee.view' })}
      getById={getEmployeeById}
      deleteById={deleteEmployee}
      editUrl="/org/employee/edit"
      listUrl="/org/employee"
      columns={buildDescriptions(EmployeeEntity, intl)}
    />
  );
};

export default EmployeeViewPage;
