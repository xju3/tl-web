import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { Peripheral } from '../../services/Device/Peripheral/data';
import { getPeripherals } from '../../services/Device/Peripheral/service';

export type PeripheralSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (peripheral: Peripheral) => void;
};

const PeripheralSelectModal = ({
  open,
  onCancel,
  onSelect,
}: PeripheralSelectModalProps) => {
  const actionRef = useRef<ActionType>(null);

  const columns: ProColumns<Peripheral>[] = [
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
      title="选择外设"
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnHidden={true}
      maskClosable={false}
    >
      <ProTable<Peripheral>
        headerTitle="外设列表"
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
          return getPeripherals(adjustedParams);
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

export default PeripheralSelectModal;
