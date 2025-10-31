import { PlusOutlined } from '@ant-design/icons';
import {
  type ActionType,
  type ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Card, Popconfirm, Tabs } from 'antd';
import React, { useRef } from 'react';
import type { Partner, PartnerProductVo } from '@/services/Org/Partner/data';
import {
  deletePartnerProduct,
  getTenantProducts,
} from '@/services/Org/Partner/service';
import type { Tenant } from '@/services/Org/Tenant/data';

const searchParams = new URLSearchParams(location.search);

type PartnerViewTabsProps = {
  tenant: Tenant;
};

const TenantProductViewTabs: React.FC<PartnerViewTabsProps> = ({ tenant }) => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>(null);

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
            history.push(
              `/tenant/partner/${tenant.id}/product/edit/${record.id}`,
            )
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
            if (tenant.id) {
              await deletePartnerProduct(tenant.id, record.id);
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
                    history.push(`/tenant/partner/${tenant.id}/product/add`)
                  }
                >
                  <PlusOutlined />
                  {intl.formatMessage({ id: 'common.actions.add' })}
                </Button>
              ),
            }}
            request={(params) =>
              getTenantProducts({ ...params, partnerId: tenant.id })
            }
            columns={productColumns}
          />
        </Tabs.TabPane>
      </Tabs>
    </Card>
  );
};

export default TenantProductViewTabs;
