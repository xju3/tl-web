import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import CabinetCableSelector from '@/components/Selectors/CabinetCableSelector';
import PeripheralSelector from '@/components/Selectors/PeripheralSelector';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import type { EntityField } from '../types';

export const CabinetPeripheralEntity: EntityField<CabinetPeripheral>[] = [
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
    dataIndex: 'cableId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'peripheralId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
      formItemProps: {
        initialValue: 1,
      },
    },
  },
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'code',
    width: 180,
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      formItemProps: {
        width: 'lg', // ✅ 通过 formItemProps 传递
      },
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Peripheral>
          nameFieldName="name"
          width={'lg'}
          labelIntl="device.peripheral.name"
          SelectorModal={PeripheralSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              peripheralId: entity.id,
              code: entity.code,
              name: entity.name,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'name',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        width: 'lg', // ✅ 通过 formItemProps 传递
        disabled: true,
      },
    },
  },
  {
    intlId: 'common.quantity',
    dataIndex: 'quantity',
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      fieldType: 'digit',
    },
    width: 80,
    column: {},
  },
  {
    dataIndex: 'cableCode',
    visibility: {
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => {
        return (
          <EntitySelectorFormItem
            nameFieldName="cableCode"
            labelIntl="device.cabinet.cable.code"
            formDependencies={['cabinetId']}
            width={'lg'}
            selectorProps={(dependencies: Record<string, any>) => ({
              cabinetId: dependencies.cabinetId,
            })}
            SelectorModal={CabinetCableSelector}
            onSelect={(entity, formInstance) => {
              formInstance.setFieldsValue({
                cableId: entity.id,
                cableCode: entity.code,
                cableName: entity.name,
              });
            }}
          />
        );
      },
    },
  },
  {
    intlId: 'device.cabinet.cable.name',
    dataIndex: 'cableName',
    visibility: {
      inForm: true,
      inTable: true,
    },
    form: {
      formItemProps: {
        width: 'lg', // ✅ 通过 formItemProps 传递
        disabled: true,
      },
    },
  },
];
