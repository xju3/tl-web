import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Role } from '@/services/Sys/Role/data';

export const RoleDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Role>[] => [
  {
    title: intl.formatMessage({ id: 'page.sys.role.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'page.sys.role.code' }),
    dataIndex: 'code',
  },
];
