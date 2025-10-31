import type { Menu } from '@/services/Sys/Menu/data';
import type { EntityField } from './types';

export const MenuEntity: EntityField<Menu>[] = [
  {
    intlId: 'sys.menu.parentId',
    dataIndex: 'parentId',
    inDescription: true,
  },
  {
    intlId: 'sys.menu.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'sys.menu.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inSelector: true,
  },
  {
    intlId: 'sys.menu.path',
    dataIndex: 'path',
    valueType: 'text',
    sorter: {
      multiple: 3,
    },
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'sys.menu.component',
    dataIndex: 'component',
    valueType: 'text',
    sorter: {
      multiple: 4,
    },
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'sys.menu.icon',
    dataIndex: 'icon',
    valueType: 'text',
    sorter: {
      multiple: 5,
    },
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'sys.menu.type',
    dataIndex: 'type',
    valueType: 'text',
    sorter: {
      multiple: 6,
    },
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'sys.menu.visible',
    dataIndex: 'visible',
    valueType: 'text',
    sorter: {
      multiple: 7,
    },
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'sys.menu.permission',
    dataIndex: 'permission',
    valueType: 'text',
    sorter: {
      multiple: 8,
    },
    inTable: true,
    inDescription: true,
  },
];
