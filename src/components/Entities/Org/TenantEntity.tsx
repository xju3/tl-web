import type { Tenant } from '@/services/Org/Tenant/data';
import type { EntityField } from '../types';

export const TenantEntity: EntityField<Tenant>[] = [
  {
    intlId: 'org.tenant.name',
    dataIndex: 'name',
    valueType: 'text',
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
    intlId: 'org.tenant.code',
    dataIndex: 'code',
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
];
