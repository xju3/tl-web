import type { Partner } from '@/services/Org/Partner/data';
import type { EntityField } from '../types';

export const PartnerEntity: EntityField<Partner>[] = [
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
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'org.partner.contact',
    dataIndex: 'contact',
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
    intlId: 'org.partner.email',
    dataIndex: 'email',
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
    intlId: 'org.partner.phone',
    dataIndex: 'phone',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'org.partner.region',
    dataIndex: 'region',
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
    dataIndex: 'id',
    valueType: 'text',
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
  {
    dataIndex: 'regionId',
    valueType: 'text',
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'text',
      hidden: true,
    },
  },
];
