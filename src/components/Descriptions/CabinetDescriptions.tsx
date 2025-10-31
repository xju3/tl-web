import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Cabinet } from '@/services/Device/Cabinet/data';

export const CabinetDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Cabinet>[] => [
  {
    dataIndex: 'code',
    title: intl.formatMessage({ id: 'device.cabinet.code' }),
  },
  {
    dataIndex: 'name',
    title: intl.formatMessage({ id: 'device.cabinet.name' }),
  },
];
