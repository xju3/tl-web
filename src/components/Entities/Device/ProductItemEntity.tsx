import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import CabinetSelector from '@/components/Selectors/CabinetSelector';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import type { ProductItem } from '@/services/Device/Product/data';
import type { EntityField } from '../types';

export const ProductItemEntity: EntityField<ProductItem>[] = [
  {
    dataIndex: 'cabinetId',
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
    dataIndex: 'id',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    intlId: 'device.cabinet.code',
    dataIndex: 'cabinetCode',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Cabinet>
          nameFieldName="cabinetCode"
          width={'lg'}
          labelIntl="device.cabinet.code"
          SelectorModal={CabinetSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              cabinetId: entity.id,
              cabinetCode: entity.code,
              cabinetName: entity.name,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'device.cabinet.name',
    dataIndex: 'cabinetName',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: { disabled: true },
    },
  },
];
