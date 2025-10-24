import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import { history, useIntl, useLocation, useParams } from '@umijs/max';
import { Button, Card, Popconfirm, Space, Tabs } from 'antd';
import { useEffect, useRef, useState } from 'react';
import type {
  Cabinet,
  CabinetPeripheralUsage,
  Cable,
} from '@/services/Device/Cabinet/data';
import {
  deleteCabinet,
  deleteCabinetCable,
  deleteCabinetPeripheral,
  deleteCabinetPeripheralUsage,
  getCabinetById,
  getCabinetCables,
  getCabinetPeripheralUsages,
  getPeripheralsByCabinetId,
} from '@/services/Device/Cabinet/service';
import type { Peripheral } from '@/services/Device/Peripheral/data';

const CabinetViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const peripheralsActionRef = useRef<ActionType>(null);
  const cablesActionRef = useRef<ActionType>(null);
  const usagesActionRef = useRef<ActionType>(null);
  const [cabinet, setCabinet] = useState<Cabinet>();
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getCabinetById(id).then((res) => {
        setCabinet(res);
      });
    }
  }, [id]);

  const peripheralColumns: ProColumns<Peripheral>[] = [
    {
      title: intl.formatMessage({ id: 'device.peripheral.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.code' }),
      dataIndex: 'cableCode',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.name' }),
      dataIndex: 'cableName',
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.quantity' }),
      dataIndex: 'quantity',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      key: 'action',
      valueType: 'option',
      width: '150px',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            history.push(`/device/cabinets/bindings/${record.id}/edit`);
          }}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,

        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            if (id) {
              await deleteCabinetPeripheral(id, record.id);
              peripheralsActionRef.current?.reload();
            }
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  const cableColumns: ProColumns<Cable>[] = [
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'device.host.code' }),
      dataIndex: 'hostCode',
    },
    {
      title: intl.formatMessage({ id: 'device.host.name' }),
      dataIndex: 'hostName',
    },
    {
      title: intl.formatMessage({ id: 'device.host.port.code' }),
      dataIndex: 'hostPortCode',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.description' }),
      dataIndex: 'description',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      key: 'action',
      valueType: 'option',
      width: '150px',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            history.push(`/device/cabinets/${id}/cables/${record.id}/edit`);
          }}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,

        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            if (id) {
              await deleteCabinetCable(id, record.id);
              cablesActionRef.current?.reload();
            }
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  const usageColumns: ProColumns<CabinetPeripheralUsage>[] = [
    {
      title: intl.formatMessage({ id: 'device.peripheral.code' }),
      dataIndex: 'peripheralCode',
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.name' }),
      dataIndex: 'peripheralName',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.usage.sequence' }),
      dataIndex: 'sequence',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      key: 'action',
      valueType: 'option',
      width: '150px',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            history.push(`/device/cabinets/${id}/usages/${record.id}/edit`);
          }}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,

        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            if (id) {
              await deleteCabinetPeripheralUsage(id, record.id);
              usagesActionRef.current?.reload();
            }
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer
      header={{
        title: intl.formatMessage({ id: 'device.cabinet.view.title' }),
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProDescriptions
          column={2}
          title={intl.formatMessage({ id: 'device.host.basic-info.title' })}
          dataSource={cabinet}
          extra={
            <>
              <Button
                type="primary"
                onClick={() => {
                  history.push(`/device/cabinets/edit/${id}`);
                }}
              >
                {intl.formatMessage({ id: 'common.actions.edit' })}
              </Button>
              <Popconfirm
                title={intl.formatMessage({
                  id: 'device.cabinet.delete.confirm',
                })}
                onConfirm={async () => {
                  if (id) {
                    await deleteCabinet(id);
                    history.push('/device/cabinets');
                  }
                }}
              >
                <Button type="primary" danger>
                  {intl.formatMessage({ id: 'common.actions.delete' })}
                </Button>
              </Popconfirm>
            </>
          }
        >
          <ProDescriptions.Item
            dataIndex="code"
            label={intl.formatMessage({ id: 'device.cabinet.code' })}
          />
          <ProDescriptions.Item
            dataIndex="name"
            label={intl.formatMessage({ id: 'device.cabinet.name' })}
          />
        </ProDescriptions>
      </Card>
      <br />
      <Card>
        <Tabs
          activeKey={searchParams.get('tab') || 'peripherals'}
          onChange={(key) => {
            history.push({
              pathname: location.pathname,
              search: `?tab=${key}`,
            });
          }}
        >
          <Tabs.TabPane
            tab={intl.formatMessage({ id: 'device.peripheral.list.title' })}
            key="peripherals"
          >
            <ProTable<Peripheral>
              headerTitle={intl.formatMessage({
                id: 'device.peripheral.list.title',
              })}
              actionRef={peripheralsActionRef}
              rowKey="id"
              search={false}
              toolbar={{
                title: (
                  <Button
                    key="bind"
                    type="primary"
                    onClick={() => {
                      history.push(`/device/cabinets/${id}/bind`);
                    }}
                  >
                    <PlusOutlined />
                    {intl.formatMessage({
                      id: 'device.cabinet.bind.peripheral',
                    })}
                  </Button>
                ),
              }}
              request={(params) =>
                getPeripheralsByCabinetId(id!, {
                  currPage: params.current!,
                  pageSize: params.pageSize!,
                })
              }
              columns={peripheralColumns}
              pagination={{
                pageSize: 10,
              }}
            />
          </Tabs.TabPane>

          {cabinet?.parentId == null && (
            <Tabs.TabPane
              tab={intl.formatMessage({
                id: 'device.cabinet.cable.list.title',
              })}
              key="cables"
            >
              <ProTable<Cable>
                headerTitle={intl.formatMessage({
                  id: 'device.cabinet.cable.list.title',
                })}
                actionRef={cablesActionRef}
                rowKey="id"
                search={false}
                toolbar={{
                  title: (
                    <Space>
                      {' '}
                      <Button
                        key="add"
                        type="primary"
                        onClick={() => {
                          history.push(
                            `/device/cabinets/${id}/cables/add/edit`,
                          );
                        }}
                      >
                        <PlusOutlined />
                        {intl.formatMessage({
                          id: 'device.cabinet.create.cable',
                        })}
                      </Button>
                      ,
                    </Space>
                  ),
                }}
                request={() => getCabinetCables(id!)}
                columns={cableColumns}
                pagination={{
                  pageSize: 10,
                }}
              />
            </Tabs.TabPane>
          )}

          {cabinet?.parentId != null && (
            <Tabs.TabPane
              tab={intl.formatMessage({
                id: 'device.cabinet.usage.list.title',
              })}
              key="usages"
            >
              <ProTable<CabinetPeripheralUsage>
                headerTitle={intl.formatMessage({
                  id: 'device.cabinet.usage.list.title',
                })}
                actionRef={usagesActionRef}
                rowKey="id"
                search={false}
                toolBarRender={() => [
                  <Button
                    key="add"
                    type="primary"
                    onClick={() => {
                      history.push(`/device/cabinets/${id}/usages/add`);
                    }}
                  >
                    {intl.formatMessage({ id: 'common.actions.add' })}
                  </Button>,
                ]}
                request={() => getCabinetPeripheralUsages(id!)}
                columns={usageColumns}
                pagination={{
                  pageSize: 10,
                }}
              />
            </Tabs.TabPane>
          )}
        </Tabs>
      </Card>
    </PageContainer>
  );
};

export default CabinetViewPage;
