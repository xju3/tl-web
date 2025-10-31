import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Employee } from '@/services/Org/Employee/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Employee>[] => [
  {
    title: intl.formatMessage({ id: 'org.employee.code' }),
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'org.employee.name' }),
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },

  {
    title: intl.formatMessage({ id: 'org.employee.gender' }),
    dataIndex: 'gender',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
  },
  {
    title: intl.formatMessage({ id: 'org.employee.email' }),
    dataIndex: 'email',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
  },
  {
    title: intl.formatMessage({ id: 'org.employee.mobile' }),
    dataIndex: 'mobile',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
  },
];
