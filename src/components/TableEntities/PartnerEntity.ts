import type { Partner } from '@/services/Org/Partner/data';
import type { EntityField } from './types';

export const PartnerEntity: EntityField<Partner>[] = [
  {
    intlId: 'org.partner.code',
    dataIndex: 'code',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'org.partner.name',
    dataIndex: 'name',
    sorter: true,
    inTable: true,
    inDescription: true,
    inSelector: true,
  },
  {
    intlId: 'org.partner.address',
    dataIndex: 'address',
    inTable: true,
    inDescription: true,
  },
  {
    intlId: 'org.partner.org',
    dataIndex: 'orgId',
    valueType: 'select',
    valueEnum: {
      true: { text: 'Yes' },
      false: { text: 'No' },
    },
    inTable: true,
    inDescription: true,
  },
];
