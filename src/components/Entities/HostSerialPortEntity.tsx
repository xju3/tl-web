import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import SerialPortSelector from '@/components/Selectors/SerialPortSelector';
import type { HostSerialPort } from '@/services/Device/Host/data';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import type { EntityField } from './types';

export const HostSerialPortEntity: EntityField<HostSerialPort>[] = [
  {
    dataIndex: 'id',
    inForm: true,
    hidden: true,
  },
  {
    dataIndex: 'hostSerialPortId',
    inForm: true,
    hidden: true,
  },
  {
    dataIndex: 'hostId',
    inForm: true,
    hidden: true,
  },

  {
    intlId: 'device.serial-port.name',
    inTable: true,
    inForm: true,
    fieldType: 'custom',
    renderFormItem: () => (
      <EntitySelectorFormItem<SerialPort>
        nameFieldName="code"
        width={'lg'}
        labelIntl="device.serial-port.code"
        SelectorModal={SerialPortSelector}
        onSelect={(entity, formInstance) => {
          formInstance.setFieldsValue({
            serialPortId: entity.id,
            code: entity.code,
            name: entity.name,
            baudRate: entity.baudRate,
          });
        }}
      />
    ),
  },
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'name',
    inTable: true,
    inForm: true,
    formItemProps: {
      width: 'lg',
      disabled: true,
      placeholder: '',
    },
  },
  {
    intlId: 'device.serial-port.baudRate',
    dataIndex: 'baudRate',
    inTable: true,
    inForm: true,
    formItemProps: {
      width: 'lg',
      disabled: true,
      placeholder: ' ',
    },
  },
];
