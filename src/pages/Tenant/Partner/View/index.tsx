import { PlusOutlined } from '@ant-design/icons';
import {
  type ActionType,
  PageContainer,
  type ProColumns,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import {
  Button,
  Card,
  Descriptions,
  message,
  Popconfirm,
  Space,
  Tabs,
} from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import type {
  PartnerProductVo,
  PartnerVo,
} from '../../../../services/Tenant/Partner/data';

const searchParams = new URLSearchParams(location.search);

import {
  deletePartner,
  deletePartnerProduct,
  getPartner,
  queryPartnerProducts,
} from '../../../../services/Tenant/Partner/service';

const PartnerView: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<PartnerVo>();
  const actionRef = useRef<ActionType>(null);

  useEffect(() => {
    if (id) {
      getPartner(id).then((response) => {
        setData(response);
      });
    }
  }, [id]);

  const handleRemove = async () => {
    if (!id) return;
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.deleting' }),
    );
    try {
      await deletePartner(id);
      hide();
      message.success(
        intl.formatMessage({ id: 'common.actions.delete.success' }),
      );
      history.push('/tenant/partner/list');
    } catch (error) {
      hide();
      message.error(
        intl.formatMessage({ id: 'pages.searchTable.delete.fail' }),
      );
    }
  };

  const productColumns: ProColumns<PartnerProductVo>[] = [
    {
      title: intl.formatMessage({ id: 'tenant.partner.product.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'tenant.partner.product.startTime' }),
      dataIndex: 'startTime',
      valueType: 'date',
    },
    {
      title: intl.formatMessage({ id: 'tenant.partner.product.endTime' }),
      dataIndex: 'endTime',
      valueType: 'date',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      width: '180px',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() =>
            history.push(`/tenant/partner/${id}/product/edit/${record.id}`)
          }
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({
            id: 'tenant.partner.product.delete.confirm',
          })}
          onConfirm={async () => {
            if (id) {
              await deletePartnerProduct(id, record.id);
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
      {data && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card>
            <Descriptions
              bordered
              title={intl.formatMessage({ id: 'tenant.partner' })}
              extra={
                <>
                  <Space>
                    <Button
                      type="primary"
                      onClick={() => {
                        history.push(`/tenant/partner/edit/${id}`);
                      }}
                    >
                      {intl.formatMessage({ id: 'common.actions.edit' })}
                    </Button>
                    <Popconfirm
                      title={intl.formatMessage({
                        id: 'common.delete.confirm',
                      })}
                      onConfirm={handleRemove}
                    >
                      <Button danger>
                        {intl.formatMessage({ id: 'common.actions.delete' })}
                      </Button>
                    </Popconfirm>
                  </Space>
                </>
              }
            >
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.partner.code' })}
              >
                {data.code}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.partner.name' })}
              >
                {data.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.partner.address' })}
              >
                {data.address}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'tenant.partner.tenant' })}
              >
                {data.tenant ? 'Yes' : 'No'}
              </Descriptions.Item>
            </Descriptions>
          </Card>
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
                tab={intl.formatMessage({
                  id: 'tenant.partner.product.list.title',
                })}
                key="peripherals"
              >
                <ProTable<PartnerProductVo>
                  actionRef={actionRef}
                  rowKey="id"
                  search={false}
                  options={{
                    density: true,
                    fullScreen: true,
                    reload: true,
                    setting: true,
                  }}
                  toolbar={{
                    title: (
                      <Button
                        type="primary"
                        key="primary"
                        onClick={() =>
                          history.push(`/tenant/partner/${id}/product/add`)
                        }
                      >
                        <PlusOutlined />
                        {intl.formatMessage({ id: 'common.actions.add' })}
                      </Button>
                    ),
                  }}
                  request={(params) =>
                    queryPartnerProducts({ ...params, partnerId: id })
                  }
                  columns={productColumns}
                />
              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Space>
      )}
    </PageContainer>
  );
};

export default PartnerView;
