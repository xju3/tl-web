import type { Partner, PartnerProduct } from '@/services/Org/Partner/data';
import type { EntityField } from '../types';

export const PartnerProductEntity: EntityField<PartnerProduct>[] = [
  {
    intlId: 'org.partner.code',
    dataIndex: 'code',
    sorter: true,
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
    intlId: 'org.partner.name',
    dataIndex: 'name',
    sorter: true,
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
    intlId: 'org.partner.address',
    dataIndex: 'address',
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
    intlId: 'org.partner.org',
    dataIndex: 'orgId',
    valueType: 'select',
    valueEnum: {
      true: { text: 'Yes' },
      false: { text: 'No' },
    },
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
];
