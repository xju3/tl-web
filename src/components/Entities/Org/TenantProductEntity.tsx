import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import PartnerSelector from '@/components/Selectors/PartnerSelector';
import ProductSelector from '@/components/Selectors/ProductSelector';
import type { Product } from '@/services/Device/Product/data';
import type { Partner } from '@/services/Org/Partner/data';
import type { TenantProduct } from '@/services/Org/Tenant/data';
import type { EntityField } from '../types';

export const TenantProductEntity: EntityField<TenantProduct>[] = [
  {
    intlId: 'org.tenant.code',
    dataIndex: 'code',
    sorter: true,
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Product>
          nameFieldName="location"
          labelIntl="org.tenant.product.location"
          width={'lg'}
          SelectorModal={ProductSelector}
          onSelect={(entity, instance) => {
            instance.setFieldsValue({
              locationId: entity.id,
              location: entity.code,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'org.tenant.name',
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
    intlId: 'org.tenant.address',
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
    dataIndex: 'locationId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'org.tenant.product.location',
    dataIndex: 'location',
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Partner>
          nameFieldName="location"
          labelIntl="org.tenant.product.location"
          width={'lg'}
          SelectorModal={PartnerSelector}
          onSelect={(entity, instance) => {
            instance.setFieldsValue({
              locationId: entity.id,
              location: entity.name,
            });
          }}
        />
      ),
    },
  },
];
