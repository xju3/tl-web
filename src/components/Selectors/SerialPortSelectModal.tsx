import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { SerialPort } from '../../pages/Device/SerialPort/data';
import { getSerialPorts } from '../../pages/Device/SerialPort/service';

export type SerialPortSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (id: string) => void;
};

const SerialPortSelectModal = ({
  open,
  onCancel,
  onSelect,
}: SerialPortSelectModalProps) => {
  const actionRef = useRef<ActionType>(null);

  const columns: ProColumns<SerialPort>[] = [
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '端口',
      dataIndex: 'port',
      sorter: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="select"
          onClick={() => {
            onSelect(record.id);
          }}
        >
          选择
        </a>,
      ],
    },
  ];

  return (
    <Modal
      title="选择串口"
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <ProTable<SerialPort>
        headerTitle="串口列表"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          const adjustedParams = {
            ...rest,
            currPage: 1,
            pageSize: 10,
          };
          return getSerialPorts(adjustedParams);
        }}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        tableAlertRender={false}
      />
    </Modal>
  );
};

export default SerialPortSelectModal;
