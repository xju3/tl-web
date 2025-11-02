import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import SerialPortSelector from '@/components/Selectors/SerialPortSelector';
import type { HostSerialPort } from '@/services/Device/Host/data';
import type { SerialPort } from '@/services/Device/SerialPort/data';
import type { EntityField } from '../types';

export const HostSerialPortEntity: EntityField<HostSerialPort>[] = [
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
    dataIndex: 'hostSerialPortId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'hostId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },

  {
    intlId: 'device.serial-port.code',
    dataIndex: 'code',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
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
  },
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'name',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        width: 'lg',
        disabled: true,
        placeholder: '',
      },
    },
  },
  {
    intlId: 'device.serial-port.baudRate',
    dataIndex: 'baudRate',
    visibility: {
      inTable: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        width: 'lg',
        disabled: true,
        placeholder: ' ',
      },
    },
  },
];
