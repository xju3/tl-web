import type { Partner } from '@/services/Org/Partner/data';
import type { EntityField } from '../types';

export const PartnerEntity: EntityField<Partner>[] = [
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
    dataIndex: 'orgId',
    valueType: 'select',
    valueEnum: {
      true: { text: 'Yes' },
      false: { text: 'No' },
    },
    inTable: true,
    inForm: true,
    fieldType: 'text',
  },
];
