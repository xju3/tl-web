import type { ActionType, ProColumns } from '@ant-design/pro-components';
import {
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import { history, useIntl, useLocation, useParams } from '@umijs/max';
import { Button, Card, Popconfirm, Tabs } from 'antd';
import { useEffect, useRef, useState } from 'react';
import type { Peripheral } from '../../Peripherals/data';
import type { Cabinet, Cable } from '../data.d';
import {
  deleteCabinet,
  deleteCabinetCable,
  deleteCabinetPeripheral,
  getCabinetById,
  getCabinetCables,
  getPeripheralsByCabinetId,
} from '../service';

const CabinetViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const peripheralsActionRef = useRef<ActionType>(null);
  const cablesActionRef = useRef<ActionType>(null);
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
      title: intl.formatMessage({ id: 'peripheral.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'peripheral.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'peripheral.quantity' }),
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
          {intl.formatMessage({ id: 'common.edit' })}
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
          <a>{intl.formatMessage({ id: 'common.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  const cableColumns: ProColumns<Cable>[] = [
    {
      title: intl.formatMessage({ id: 'cable.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'cable.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'cable.description' }),
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
          {intl.formatMessage({ id: 'common.edit' })}
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
          <a>{intl.formatMessage({ id: 'common.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer
      header={{
        title: intl.formatMessage({ id: 'cabinet.view.title' }),
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProDescriptions
          column={2}
          title={cabinet?.name}
          dataSource={cabinet}
          extra={
            <>
              <Button
                type="primary"
                onClick={() => {
                  history.push(`/device/cabinets/edit/${id}`);
                }}
              >
                {intl.formatMessage({ id: 'common.edit' })}
              </Button>
              <Popconfirm
                title={intl.formatMessage({ id: 'cabinet.delete.confirm' })}
                onConfirm={async () => {
                  if (id) {
                    await deleteCabinet(id);
                    history.push('/device/cabinets');
                  }
                }}
              >
                <Button type="primary" danger>
                  {intl.formatMessage({ id: 'common.delete' })}
                </Button>
              </Popconfirm>
            </>
          }
        >
          <ProDescriptions.Item
            dataIndex="code"
            label={intl.formatMessage({ id: 'common.code' })}
          />
          <ProDescriptions.Item
            dataIndex="name"
            label={intl.formatMessage({ id: 'common.name' })}
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
            tab={intl.formatMessage({ id: 'peripheral.list.title' })}
            key="peripherals"
          >
            <ProTable<Peripheral>
              headerTitle={intl.formatMessage({
                id: 'peripheral.list.title',
              })}
              actionRef={peripheralsActionRef}
              rowKey="id"
              search={false}
              toolBarRender={() => [
                <Button
                  key="bind"
                  type="primary"
                  onClick={() => {
                    history.push(`/device/cabinets/${id}/bind`);
                  }}
                >
                  {intl.formatMessage({ id: 'cabinet.view.bindPeripheral' })}
                </Button>,
              ]}
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
              tab={intl.formatMessage({ id: 'cable.list.title' })}
              key="cables"
            >
              <ProTable<Cable>
                headerTitle={intl.formatMessage({ id: 'cable.list.title' })}
                actionRef={cablesActionRef}
                rowKey="id"
                search={false}
                toolBarRender={() => [
                  <Button
                    key="add"
                    type="primary"
                    onClick={() => {
                      history.push(`/device/cabinets/${id}/cables/add/edit`);
                    }}
                  >
                    {intl.formatMessage({ id: 'common.add' })}
                  </Button>,
                ]}
                request={() => getCabinetCables(id!)}
                columns={cableColumns}
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
