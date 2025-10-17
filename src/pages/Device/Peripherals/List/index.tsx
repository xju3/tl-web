import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { Peripheral } from '../data.d';
import { deletePeripheral, getPeripherals } from '../service';

const PeripheralListPage = () => {
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<Peripheral>[] = [
    {
      title: '外设编码',
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: '外设名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: '类型',
      dataIndex: 'type',
      sorter: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => history.push(`/device/peripherals/edit/${record.id}`)}
        >
          编辑
        </a>,
        <a
          key="view"
          onClick={() => history.push(`/device/peripherals/view/${record.id}`)}
        >
          查看
        </a>,
        <Popconfirm
          key="delete"
          title="您确定要删除该外设吗？"
          onConfirm={async () => {
            await deletePeripheral(record.id);
            actionRef.current?.reload();
          }}
        >
          <a>删除</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<Peripheral>
        headerTitle="外设列表"
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/device/peripherals/add');
            }}
          >
            <PlusOutlined /> 新增外设
          </Button>,
        ]}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          // The backend uses 0-based indexing for pages, so we subtract 1.
          const adjustedParams = {
            ...rest,
            currPage: current ? current - 1 : 0,
            pageSize,
          };
          return getPeripherals(adjustedParams);
        }}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
      />
    </PageContainer>
  );
};

export default PeripheralListPage;
