import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { Menu } from '@/services/Sys/Menu/data';

export const MenuDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Menu>[] => [
  {
    title: intl.formatMessage({ id: 'sys.menu.parentId' }),
    dataIndex: 'parentId',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.name' }),
    dataIndex: 'name',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.path' }),
    dataIndex: 'path',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.component' }),
    dataIndex: 'component',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.icon' }),
    dataIndex: 'icon',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.type' }),
    dataIndex: 'type',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.sortOrder' }),
    dataIndex: 'sortOrder',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.visible' }),
    dataIndex: 'visible',
  },
  {
    title: intl.formatMessage({ id: 'sys.menu.permission' }),
    dataIndex: 'permission',
  },
];
