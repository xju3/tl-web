import type { Partner, PartnerProduct } from '@/services/Org/Partner/data';
import type { EntityField } from '../types';

export const PartnerProductEntity: EntityField<PartnerProduct>[] = [
  {
    intlId: 'org.partner.code',
    dataIndex: 'code',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'org.partner.name',
    dataIndex: 'name',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
    inForm: true,
    fieldType: 'text',
    rules: [{ type: 'required' }],
  },
  {
    intlId: 'org.partner.address',
    dataIndex: 'address',
    inTable: true,
    inDescription: true,
    inForm: true,
    fieldType: 'text',
  },
  {
    intlId: 'org.partner.org',
    dataIndex: 'orgId',
    valueType: 'select',
    valueEnum: {
      true: { text: 'Yes' },
      false: { text: 'No' },
    },
    inForm: true,
    fieldType: 'text',
  },
];
