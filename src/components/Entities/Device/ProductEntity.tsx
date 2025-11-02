import type { Product } from '@/services/Device/Product/data';
import type { EntityField } from '../types';

export const ProductEntity: EntityField<Product>[] = [
  {
    intlId: 'device.product.code',
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
    column: {
      showColumnFilter: true,
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
    intlId: 'device.product.name',
    dataIndex: 'name',
    sorter: {
      multiple: 1,
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
    intlId: 'device.product.m_date',
    dataIndex: 'm_date',
    valueType: 'date',
    sorter: {
      multiple: 1,
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
