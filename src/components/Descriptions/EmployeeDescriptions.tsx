import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Employee } from '@/services/Org/Employee/data';

export const EmployeeDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Employee>[] => [
  {
    title: intl.formatMessage({ id: 'org.employee.personId' }),
    dataIndex: 'personId',
  },
  {
    title: intl.formatMessage({ id: 'org.employee.employeeNumber' }),
    dataIndex: 'employeeNumber',
  },
];
