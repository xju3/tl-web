import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import PartnerSelector from '@/components/Selectors/PartnerSelector';
import ProductSelector from '@/components/Selectors/ProductSelector';
import type { Product } from '@/services/Device/Product/data';
import type { Partner, PartnerProduct } from '@/services/Org/Partner/data';
import type { EntityField } from '../types';

export const PartnerProductEntity: EntityField<PartnerProduct>[] = [
  {
    intlId: 'device.product.code',
    dataIndex: 'productCode',
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
          nameFieldName="productCode"
          labelIntl="device.product.code"
          width={'lg'}
          SelectorModal={ProductSelector}
          onSelect={(entity, instance) => {
            instance.setFieldsValue({
              productId: entity.id,
              productName: entity.name,
              productCode: entity.code,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'device.product.name',
    dataIndex: 'productName',
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
    intlId: 'org.partner.product.location',
    dataIndex: 'locationName',
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Partner>
          nameFieldName="locationName"
          labelIntl="org.partner.product.location"
          width={'lg'}
          SelectorModal={PartnerSelector}
          onSelect={(entity, instance) => {
            instance.setFieldsValue({
              locationId: entity.id,
              locationName: entity.name,
            });
          }}
        />
      ),
    },
  },
  {
    dataIndex: 'id',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'productId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'partnerId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
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
];
