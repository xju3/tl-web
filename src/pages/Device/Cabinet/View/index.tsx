import type { ProColumns } from '@ant-design/pro-components';
import {
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import type { Peripheral } from '../../Peripherals/data';
import type { Cabinet } from '../data.d';
import {
  deleteCabinet,
  getCabinetById,
  getPeripheralsByCabinetId,
} from '../service';

const CabinetViewPage = () => {
  const { id } = useParams<{ id: string }>();
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
      title: intl.formatMessage({ id: 'peripheral.type' }),
      dataIndex: 'type',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      key: 'action',
      render: (_, record) => [
        <a key="edit" onClick={() => {}}>
          {intl.formatMessage({ id: 'common.edit' })}
        </a>,

        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={() => {}}
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
          columns={[
            {
              title: intl.formatMessage({ id: 'common.code' }),
              dataIndex: 'code',
            },
            {
              title: intl.formatMessage({ id: 'common.name' }),
              dataIndex: 'name',
            },
          ]}
        />
      </Card>
      <br />
      <ProTable<Peripheral>
        headerTitle={intl.formatMessage({ id: 'peripheral.list.title' })}
        rowKey="id"
        search={false}
        toolBarRender={() => [
          <Button key="bind" type="primary" onClick={() => {}}>
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
    </PageContainer>
  );
};

export default CabinetViewPage;
