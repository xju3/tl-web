import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import CabinetPeripheralSelector from '@/components/Selectors/CabinetPeripheralSelector';
import HostSerialPortSelector from '@/components/Selectors/HostSerialPortSelector';
import type {
  CabinetPeripheral,
  CabinetPeripheralUsage,
} from '@/services/Device/Cabinet/data';
import type { HostSerialPort } from '@/services/Device/Host/data';
import type { EntityField } from '../types';

export const CabinetUsageEntity: EntityField<CabinetPeripheralUsage>[] = [
  {
    dataIndex: 'id',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    dataIndex: 'cabinetId',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    dataIndex: 'peripheralId',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    dataIndex: 'cabinetPeripheralId',
    visibility: { inForm: true },
    form: { hidden: true },
  },
  {
    intlId: 'device.peripheral.code',
    dataIndex: 'peripheralCode',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<CabinetPeripheral>
          nameFieldName="peripheralCode"
          labelIntl="device.host.port.code"
          width={'lg'}
          selectorProps={(dependencies: Record<string, any>) => ({
            cabinetId: dependencies.cabinetId,
          })}
          SelectorModal={CabinetPeripheralSelector}
          formDependencies={['cabinetId']}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              cabinetPeripheralId: entity.id,
              peripheralCode: entity.code,
              peripheralName: entity.name,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'device.peripheral.name',
    dataIndex: 'peripheralName',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        disabled: true,
      },
    },
  },
  {
    intlId: 'device.cabinet.usage.sequence',
    dataIndex: 'sequence',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      fieldType: 'digit',
    },
  },
];
