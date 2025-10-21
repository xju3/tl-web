import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { Peripheral } from '../data.d';
import { deletePeripheral, getPeripherals } from '../service';

const PeripheralListPage = () => {
  const actionRef = useRef<ActionType>(undefined);
  const intl = useIntl();

  const columns: ProColumns<Peripheral>[] = [
    {
      title: intl.formatMessage({ id: 'device.peripheral.code' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.name' }),
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.type' }),
      dataIndex: 'type',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      width: '150px',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => history.push(`/device/peripherals/edit/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <a
          key="view"
          onClick={() => history.push(`/device/peripherals/view/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.view' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({
            id: 'device.peripheral.delete.confirm',
          })}
          onConfirm={async () => {
            await deletePeripheral(record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<Peripheral>
        headerTitle={intl.formatMessage({ id: 'device.peripheral.list.title' })}
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
            <PlusOutlined />{' '}
            {intl.formatMessage({ id: 'device.peripheral.add' })}
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
