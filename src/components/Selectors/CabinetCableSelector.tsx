import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { Cable } from '../../services/Device/Cabinet/data';
import { getCabinetCables } from '../../services/Device/Cabinet/service';

export type CabinetCableSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (cable: Cable) => void;
};

const CabinetCableSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetCableSelectorProps) => {
  const actionRef = useRef<ActionType>(null);

  const columns: ProColumns<Cable>[] = [
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
      title="选择线缆"
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
    >
      <ProTable<Cable>
        headerTitle="线缆列表"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={() => getCabinetCables(cabinetId)}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        tableAlertRender={false}
      />
    </Modal>
  );
};

export default CabinetCableSelector;
