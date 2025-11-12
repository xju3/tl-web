import { Badge } from 'antd';
import React from 'react';
import type { InstCabinet } from '@/services/Inst/Cabinet/data';
import type { EntityField } from '../types';

export const InstCabinetEntity: EntityField<InstCabinet>[] = [
  {
    dataIndex: 'id',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    intlId: 'device.cabinet.code',
    dataIndex: 'code',
    key: 'code',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    width: 160,
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'device.cabinet.name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      multiple: 2,
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
    intlId: 'common.locker',
    dataIndex: 'lockerVal',
    key: 'lkName',
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    valueEnum: {
      '0': 'common.locked',
      '1': 'common.open',
    },
    column: {
      align: 'center',
      sorter: {
        multiple: 2,
      },
    },
    form: {
      fieldType: 'text', // This will be overridden by the presence of valueEnum
    },
  },
  {
    intlId: 'common.scale',
    dataIndex: 'scaleVal',
    key: 'lcName',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
  {
    intlId: 'common.led',
    dataIndex: 'ledVal',
    key: 'ldName',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
  {
    intlId: 'common.lt',
    dataIndex: 'lightVal',
    key: 'ltName',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
  {
    intlId: 'device.cabinet.description',
    dataIndex: 'description',
    key: 'description',
    visibility: {
      inTable: true,
      inForm: true,
      inDescription: true,
    },
    form: {
      fieldType: 'textarea',
    },
  },
  {
    dataIndex: 'parentId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
