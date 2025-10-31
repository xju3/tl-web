import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import React, { useRef, useState } from 'react';
import SerialPortSelectModal from '@/components/Selectors/SerialPortSelectModal';
import type { HostSerialPort } from '@/services/Device/Host/data';
import {
  addHostPort,
  deleteHostPort,
  getHostPorts,
} from '@/services/Device/Host/service';

type PortsProps = {
  hostId: string;
};

const HostPortAssociations: React.FC<PortsProps> = ({ hostId }) => {
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const handleAddPort = async (serialPortId: string) => {
    await addHostPort(hostId, serialPortId);
    actionRef.current?.reload();
    setSelectModalOpen(false);
  };

  const columns: ProColumns<HostSerialPort>[] = [
    {
      title: intl.formatMessage({ id: 'device.serialport.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.code' }),
      dataIndex: 'port',
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.baudRate' }),
      dataIndex: 'baudRate',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() =>
            history.push(
              `/device/hosts/${hostId}/ports/${record.hostSerialPortId}/edit`,
            )
          }
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({
            id: 'device.host.serial-ports.delete.confirm',
          })}
          onConfirm={async () => {
            await deleteHostPort(hostId, record.hostSerialPortId);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <>
      <ProTable<HostSerialPort>
        headerTitle={intl.formatMessage({
          id: 'device.host.serial-ports.title',
        })}
        actionRef={actionRef}
        rowKey="hostSerialPortId"
        search={false}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => setSelectModalOpen(true)}
          >
            <PlusOutlined />{' '}
            {intl.formatMessage({
              id: 'device.host.serial-ports.add',
            })}
          </Button>,
        ]}
        request={(params) => getHostPorts(hostId, params)}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
      />
      <SerialPortSelectModal
        open={selectModalOpen}
        onCancel={() => setSelectModalOpen(false)}
        onSelect={handleAddPort}
      />
    </>
  );
};

export default HostPortAssociations;
