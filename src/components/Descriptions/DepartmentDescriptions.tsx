import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Department } from '@/services/Org/Department/data';

export const DepartmentDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Department>[] => [
  {
    title: intl.formatMessage({ id: 'org.department.parentId' }),
    dataIndex: 'parentId',
  },
  {
    title: intl.formatMessage({ id: 'org.department.companyId' }),
    dataIndex: 'companyId',
  },
  {
    title: intl.formatMessage({ id: 'org.department.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'org.department.code' }),
    dataIndex: 'code',
  },
];
