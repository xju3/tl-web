import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { SerialPort } from '../data.d';
import { deleteSerialPort, getSerialPorts } from '../service';

const SerialPortListPage = () => {
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
      title: '波特率',
      dataIndex: 'baudRate',
      sorter: true,
    },
    {
      title: '数据位',
      dataIndex: 'dataBits',
      sorter: true,
    },
    {
      title: '停止位',
      dataIndex: 'stopBits',
      sorter: true,
    },
    {
      title: '校验位',
      dataIndex: 'parity',
      sorter: true,
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => history.push(`/device/serial-ports/edit/${record.id}`)}
        >
          编辑
        </a>,
        <a
          key="view"
          onClick={() => history.push(`/device/serial-ports/view/${record.id}`)}
        >
          查看
        </a>,
        <Popconfirm
          key="delete"
          title="您确定要删除该串口吗？"
          onConfirm={async () => {
            await deleteSerialPort(record.id);
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
      <ProTable<SerialPort>
        headerTitle="串口列表"
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
              history.push('/device/serial-ports/add');
            }}
          >
            <PlusOutlined /> 新增串口
          </Button>,
        ]}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          // The backend uses 0-based indexing for pages, so we subtract 1.
          const adjustedParams = {
            ...rest,
            currPage: current,
            pageSize,
          };
          return getSerialPorts(adjustedParams);
        }}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
      />
    </PageContainer>
  );
};

export default SerialPortListPage;
