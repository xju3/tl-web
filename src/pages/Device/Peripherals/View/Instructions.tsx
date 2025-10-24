import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, message, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { Instruction } from '../../../../services/Device/Peripheral/data';
import {
  deleteInstruction,
  getInstructions,
} from '../../../../services/Device/Peripheral/service';

type InstructionsProps = {
  peripheralId: string;
};

const Instructions: React.FC<InstructionsProps> = ({ peripheralId }) => {
  const actionRef = useRef<ActionType>(undefined);
  const intl = useIntl();

  const handleDelete = async (id: string) => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.deleting' }),
    );
    try {
      await deleteInstruction(peripheralId, id);
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.delete.success' }),
      );
      actionRef.current?.reload();
    } catch (error) {
      hide();
    }
  };

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
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={() => handleDelete(record.id)}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <>
      <ProTable<Instruction>
        headerTitle={intl.formatMessage({
          id: 'device.peripheral.instruction.list.title',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={false}
        pagination={false}
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
        request={async () => {
          const data = await getInstructions(peripheralId);
          return {
            data: data || [],
            success: true,
          };
        }}
        columns={columns}
      />
    </>
  );
};

export default Instructions;
