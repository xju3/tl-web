import type { Menu } from '@/services/Sys/Menu/data';
import type { EntityField } from '../types';

export const MenuEntity: EntityField<Menu>[] = [
  {
    intlId: 'sys.menu.parentId',
    dataIndex: 'parentId',
    visibility: {
      inDescription: true,
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'sys.menu.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'sys.menu.code',
    dataIndex: 'code',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'sys.menu.path',
    dataIndex: 'path',
    valueType: 'text',
    sorter: {
      multiple: 3,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.component',
    dataIndex: 'component',
    valueType: 'text',
    sorter: {
      multiple: 4,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.icon',
    dataIndex: 'icon',
    valueType: 'text',
    sorter: {
      multiple: 5,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.type',
    dataIndex: 'type',
    valueType: 'text',
    sorter: {
      multiple: 6,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.visible',
    dataIndex: 'visible',
    valueType: 'text',
    sorter: {
      multiple: 7,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'switch',
    },
  },
  {
    intlId: 'sys.menu.permission',
    dataIndex: 'permission',
    valueType: 'text',
    sorter: {
      multiple: 8,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
];
