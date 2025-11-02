import type { Product } from '@/services/Device/Product/data';
import type { EntityField } from '../types';

export const ProductEntity: EntityField<Product>[] = [
  {
    intlId: 'device.product.code',
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
    showColumnFilter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'device.product.name',
    dataIndex: 'name',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'device.product.m_date',
    dataIndex: 'm_date',
    valueType: 'date',
    sorter: {
      multiple: 1,
    },
    inTable: true,
    inDescription: true,
    inForm: true,
    fieldType: 'text',
  },
];
