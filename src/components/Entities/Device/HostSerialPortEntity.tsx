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
    dataIndex: 'serialPortId',
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
    intlId: 'device.host.serial-port.code',
    dataIndex: 'portCode',
    visibility: {
      inTable: true,
      inForm: true,
      inSelector: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'device.serial-port.code',
    dataIndex: 'serialPortCode',
    visibility: {
      inTable: true,
      inForm: true,
      inSelector: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<SerialPort>
          nameFieldName="serialPortCode"
          width={'lg'}
          labelIntl="device.serial-port.code"
          SelectorModal={SerialPortSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              serialPortId: entity.id,
              serialPortCode: entity.code,
              serialPortName: entity.name,
              baudRate: entity.baudRate,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'device.serial-port.name',
    dataIndex: 'serialPortName',
    visibility: {
      inTable: true,
      inForm: true,
      inSelector: true,
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
      inSelector: true,
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
