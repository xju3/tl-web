import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import CabinetCableSelector from '@/components/Selectors/CabinetCableSelector';
import PeripheralSelector from '@/components/Selectors/PeripheralSelector';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import type { EntityField } from '../types';

export const CabinetPeripheralEntity: EntityField<CabinetPeripheral>[] = [
  {
    dataIndex: 'cabinetId',
    inForm: true,
    hidden: true,
  },
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'code',
    inForm: true,
    inTable: true,
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
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'name',
    inTable: false,
    inForm: true,
    formItemProps: {
      width: 'lg', // ✅ 通过 formItemProps 传递
      disabled: true,
    },
  },
  {
    dataIndex: 'cableCode',
    inForm: true,
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
  {
    intlId: 'device.cabinet.cable.name',
    dataIndex: 'cableName',
    inForm: true,
    inTable: true,
    formItemProps: {
      width: 'lg', // ✅ 通过 formItemProps 传递
      disabled: true,
    },
  },
];
