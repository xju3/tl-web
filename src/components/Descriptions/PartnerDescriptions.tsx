import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Partner } from '@/services/Org/Partner/data';

export const PartnerDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Partner>[] => [
  {
    title: intl.formatMessage({ id: 'tenant.partner.code' }),
    dataIndex: 'code',
  },
  {
    title: intl.formatMessage({ id: 'tenant.partner.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'tenant.partner.address' }),
    dataIndex: 'address',
  },
  {
    title: intl.formatMessage({ id: 'tenant.partner.tenant' }),
    dataIndex: 'tenant',
    valueType: 'select',
    valueEnum: {
      true: {
        text: 'Yes',
      },
      false: {
        text: 'No',
      },
    },
  },
];
