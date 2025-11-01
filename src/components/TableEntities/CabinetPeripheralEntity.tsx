import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import CabinetCableSelector from '@/components/Selectors/CabinetCableSelector';
import PeripheralSelectModal from '@/components/Selectors/PeripheralSelectModal';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import type { EntityField } from './types';

export const CabinetPeripheralEntity: EntityField<CabinetPeripheral>[] = [
  {
    dataIndex: 'cabinetId',
    inForm: true,
  },
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'code',
    inTable: true,
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'name',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.cable.code',
    dataIndex: 'cableCode',
    inTable: true,
  },
  {
    intlId: 'device.cabinet.cable.name',
    dataIndex: 'cableName',
    inTable: true,
  },
  {
    intlId: 'device.peripheral',
    dataIndex: 'cabinetPeripheralId',
    inTable: false,
    inForm: true,
    fieldType: 'custom',
    renderFormItem: () => (
      <EntitySelectorFormItem<Peripheral>
        nameFieldName="name"
        labelIntl="device.peripheral.name"
        SelectorModal={PeripheralSelectModal}
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
    dataIndex: 'cableId',
    inTable: false,
    inForm: true,
    fieldType: 'custom',
    renderFormItem: () => {
      return (
        <EntitySelectorFormItem
          nameFieldName="cableCode"
          labelIntl="device.cabinet.cable"
          formDependencies={['cabinetId']}
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
];
