import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import { getPeripheralsByCabinetId } from '@/services/Device/Cabinet/service';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export type CabinetPeripheralSelectorProps = {
  open: boolean;
  cabinetId: string;
  onCancel: () => void;
  onSelect: (peripheral: Peripheral) => void;
};

const CabinetPeripheralSelector = ({
  open,
  cabinetId,
  onCancel,
  onSelect,
}: CabinetPeripheralSelectorProps) => {
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
      title="选择机柜外设"
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
    >
      <ProTable<Peripheral>
        headerTitle="机柜外设列表"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={(params) =>
          getPeripheralsByCabinetId(cabinetId, {
            currPage: params.current!,
            pageSize: params.pageSize!,
          })
        }
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        tableAlertRender={false}
      />
    </Modal>
  );
};

export default CabinetPeripheralSelector;
