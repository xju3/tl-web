import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Tenant } from '@/services/Org/Tenant/data';

export const TenantDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Tenant>[] => [
  {
    title: intl.formatMessage({ id: 'org.company.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'org.company.code' }),
    dataIndex: 'code',
  },
];
