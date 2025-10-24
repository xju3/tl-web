import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { Host } from '@/services/Device/Host/data';
import { getHosts } from '@/services/Device/Host/service';

export type HostSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (host: Host) => void;
};

const HostSelectModal = ({
  open,
  onCancel,
  onSelect,
}: HostSelectModalProps) => {
  const actionRef = useRef<ActionType>(null);

  const columns: ProColumns<Host>[] = [
    {
      title: '编码',
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
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
            onSelect(record);
          }}
        >
          选择
        </a>,
      ],
    },
  ];

  return (
    <Modal
      title="选择主机"
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
    >
      <ProTable<Host>
        headerTitle="主机列表"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          const adjustedParams = {
            ...rest,
            currPage: current,
            pageSize: pageSize,
          };
          return getHosts(adjustedParams);
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

export default HostSelectModal;
