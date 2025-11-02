import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import CabinetSelector from '@/components/Selectors/CabinetSelector';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import type { ProductItem } from '@/services/Device/Product/data';
import type { EntityField } from '../types';

export const ProductItemEntity: EntityField<ProductItem>[] = [
  {
    intlId: 'device.cabinet.code',
    dataIndex: 'deviceCode',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Cabinet>
          nameFieldName="deviceCode"
          width={'lg'}
          labelIntl="device.serial-port.code"
          SelectorModal={CabinetSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              deviceId: entity.id,
              deviceCode: entity.code,
              deviceName: entity.name,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'device.cabinet.name',
    dataIndex: 'deviceName',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: { disabled: true },
    },
  },
];
