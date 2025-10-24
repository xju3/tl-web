import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl, useLocation, useParams } from '@umijs/max';
import { Button, Card, Descriptions, Popconfirm, Space, Tabs } from 'antd';
import { useEffect, useRef, useState } from 'react';
import SerialPortSelectModal from '@/components/Selectors/SerialPortSelectModal';
import type { Host, HostSerialPort } from '@/services/Device/Host/data';
import {
  addHostPort,
  deleteHost,
  deleteHostPort,
  getHostById,
  getHostPorts,
} from '@/services/Device/Host/service';

const HostViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [host, setHost] = useState<Host>();
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getHostById(id).then((res) => {
        setHost(res);
      });
    }
  }, [id]);

  const handleAddPort = async (serialPortId: string) => {
    if (id) {
      await addHostPort(id, serialPortId);
      actionRef.current?.reload();
      setSelectModalOpen(false);
    }
  };

  const portsColumns: ProColumns<HostSerialPort>[] = [
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
              `/device/hosts/${id}/ports/${record.hostSerialPortId}/edit`,
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
            if (id) {
              await deleteHostPort(id, record.hostSerialPortId);
              actionRef.current?.reload();
            }
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer onBack={() => history.back()}>
      {host && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card>
            <Descriptions
              title={intl.formatMessage({ id: 'device.host.basic-info.title' })}
              bordered
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() =>
                      history.push(`/device/hosts/edit/${id}`, location.state)
                    }
                  >
                    {intl.formatMessage({ id: 'common.actions.edit' })}
                  </Button>
                  <Popconfirm
                    key="delete"
                    title={intl.formatMessage({
                      id: 'device.host.delete.confirm',
                    })}
                    onConfirm={async () => {
                      if (id) {
                        await deleteHost(id);
                        history.push('/device/hosts', location.state);
                      }
                    }}
                  >
                    <Button danger>
                      {intl.formatMessage({ id: 'common.actions.delete' })}
                    </Button>
                  </Popconfirm>
                </Space>
              }
            >
              <Descriptions.Item
                label={intl.formatMessage({ id: 'device.host.code' })}
              >
                {host.code}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'device.host.name' })}
              >
                {host.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'common.ip' })}
              >
                {host.ip}
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane
                tab={intl.formatMessage({
                  id: 'device.host.serial-ports.title',
                })}
                key="1"
              >
                <ProTable<HostSerialPort>
                  headerTitle={false}
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
                  request={async (params) => {
                    const { current, pageSize } = params;
                    return getHostPorts(id!, { currPage: current, pageSize });
                  }}
                  columns={portsColumns}
                  pagination={{
                    pageSize: 10,
                  }}
                />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Space>
      )}
      <SerialPortSelectModal
        open={selectModalOpen}
        onCancel={() => setSelectModalOpen(false)}
        onSelect={handleAddPort}
      />
    </PageContainer>
  );
};

export default HostViewPage;
