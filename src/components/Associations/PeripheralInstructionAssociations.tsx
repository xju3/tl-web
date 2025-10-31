import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import React, { useRef } from 'react';
import type { Instruction } from '@/services/Device/Peripheral/data';
import {
  deleteInstruction,
  getInstructions,
} from '@/services/Device/Peripheral/service';

type InstructionsProps = {
  peripheralId: string;
};

const PeripheralInstructionAssociations: React.FC<InstructionsProps> = ({
  peripheralId,
}) => {
  const actionRef = useRef<ActionType>(undefined);
  const intl = useIntl();

  const columns: ProColumns<Instruction>[] = [
    {
      title: intl.formatMessage({
        id: 'device.peripheral.instruction.instruction',
      }),
      dataIndex: 'instruction',
    },
    {
      title: intl.formatMessage({
        id: 'device.peripheral.instruction.acknowledge',
      }),
      dataIndex: 'acknowledge',
    },
    {
      title: intl.formatMessage({
        id: 'device.peripheral.instruction.comment',
      }),
      dataIndex: 'comment',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      valueType: 'option',
      width: 180,
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            history.push(
              `/device/peripherals/${peripheralId}/instructions/edit/${record.id}`,
            );
          }}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
      ],
    },
  ];

  return (
    <ProTable<Instruction>
      headerTitle={intl.formatMessage({
        id: 'device.peripheral.instruction.list.title',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      toolBarRender={() => [
        <Button
          type="primary"
          key="primary"
          onClick={() => {
            history.push(
              `/device/peripherals/${peripheralId}/instructions/edit`,
            );
          }}
        >
          <PlusOutlined /> {intl.formatMessage({ id: 'common.actions.add' })}
        </Button>,
      ]}
      request={(params) => getInstructions(peripheralId, params)}
      columns={columns}
    />
  );
};

export default PeripheralInstructionAssociations;
