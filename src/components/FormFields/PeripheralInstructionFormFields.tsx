import { ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const PeripheralInstructionFormFields: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <ProFormText name="id" hidden />
      <ProFormText name="peripheralId" hidden />
      <ProFormText
        name="instruction"
        label={intl.formatMessage({
          id: 'device.peripheral.instruction.instruction',
        })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({
              id: 'device.peripheral.instruction.instruction.required',
            }),
          },
        ]}
      />
      <ProFormText
        name="acknowledge"
        label={intl.formatMessage({
          id: 'device.peripheral.instruction.acknowledge',
        })}
      />
      <ProFormTextArea
        name="comment"
        label={intl.formatMessage({
          id: 'device.peripheral.instruction.comment',
        })}
      />
    </>
  );
};

export default PeripheralInstructionFormFields;
