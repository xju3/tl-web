import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { User } from '@/services/Sys/User/data';

export const UserDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<User>[] => [
  {
    title: intl.formatMessage({ id: 'sys.user.username' }),
    dataIndex: 'username',
  },
  {
    title: intl.formatMessage({ id: 'sys.user.employeeId' }),
    dataIndex: 'employeeId',
  },
];
