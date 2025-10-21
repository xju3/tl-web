import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { SerialPort } from '../data.d';
import { deleteSerialPort, getSerialPorts } from '../service';

const SerialPortListPage = () => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const columns: ProColumns<SerialPort>[] = [
    {
      title: intl.formatMessage({ id: 'device.serialport.code' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.name' }),
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.protocol' }),
      dataIndex: 'protocol',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.baudRate' }),
      dataIndex: 'baudRate',
      width: '120px',
      sorter: true,
      valueEnum: {
        9600: { text: '9600' },
        19200: { text: '19200' },
        38400: { text: '38400' },
        57600: { text: '57600' },
        115200: { text: '115200' },
      },
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.dataBits' }),
      dataIndex: 'dataBits',
      width: '120px',
      sorter: true,
      valueEnum: {
        5: { text: '5' },
        6: { text: '6' },
        7: { text: '7' },
        8: { text: '8' },
      },
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.stopBits' }),
      dataIndex: 'stopBits',
      width: '120px',
      sorter: true,
      valueEnum: {
        1: { text: '1' },
        1.5: { text: '1.5' },
        2: { text: '2' },
      },
    },
    {
      title: intl.formatMessage({ id: 'device.serialport.parity' }),
      dataIndex: 'parity',
      width: '120px',
      sorter: true,
      valueEnum: {
        0: { text: 'None' },
        1: { text: 'Odd' },
        2: { text: 'Even' },
      },
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      width: '180px',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => history.push(`/device/serial-ports/edit/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <a
          key="view"
          onClick={() => history.push(`/device/serial-ports/view/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.view' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({
            id: 'device.serialport.delete.confirm',
          })}
          onConfirm={async () => {
            await deleteSerialPort(record.id);
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
      <ProTable<SerialPort>
        headerTitle={intl.formatMessage({ id: 'device.serialport.list.title' })}
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
            <PlusOutlined />{' '}
            {intl.formatMessage({ id: 'device.serialport.add' })}
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          // Correctly handle the arguments provided by ProTable.
          // `params` contains pagination and form data.
          // `sorter` is the sorting object.
          // `filter` contains filter values.
          console.log('ProTable request:', { params, sorter, filter });

          const sorters = sorter
            ? Object.entries(sorter).map(([key, value]) => ({
                fieldName: key,
                direction: value === 'ascend' ? 0 : 1,
              }))
            : undefined;

          const adjustedParams = {
            currPage: (params.current || 1) - 1,
            pageSize: params.pageSize || 10,
            ...params, // Includes form values
            ...filter, // Includes filter values
            sorters,
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
