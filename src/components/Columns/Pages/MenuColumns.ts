import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Menu } from '@/services/Sys/Menu/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Menu>[] => [
  {
    title: intl.formatMessage({ id: 'page.sys.menu.code' }),
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.name' }),
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    selector: true,
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.path' }),
    dataIndex: 'path',
    valueType: 'text',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.component' }),
    dataIndex: 'component',
    valueType: 'text',
    sorter: {
      multiple: 4,
    },
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.icon' }),
    dataIndex: 'icon',
    valueType: 'text',
    sorter: {
      multiple: 5,
    },
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.type' }),
    dataIndex: 'type',
    valueType: 'text',
    sorter: {
      multiple: 6,
    },
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.visible' }),
    dataIndex: 'visible',
    valueType: 'text',
    sorter: {
      multiple: 7,
    },
  },
  {
    title: intl.formatMessage({ id: 'page.sys.menu.permission' }),
    dataIndex: 'permission',
    valueType: 'text',
    sorter: {
      multiple: 8,
    },
  },
];
