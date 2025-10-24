import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { Product } from '../../../../services/Device/Product/data';
import {
  deleteProduct,
  getProducts,
} from '../../../../services/Device/Product/service';

const ProductListPage = () => {
  const actionRef = useRef<ActionType>(undefined);
  const intl = useIntl();

  const columns: ProColumns<Product>[] = [
    {
      title: intl.formatMessage({ id: 'device.product.code' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.product.name' }),
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.product.m_date' }),
      dataIndex: 'm_date',
      valueType: 'date',
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
          onClick={() => history.push(`/device/product/edit/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <a
          key="view"
          onClick={() => history.push(`/device/product/view/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.view' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'device.product.delete.confirm' })}
          onConfirm={async () => {
            await deleteProduct(record.id);
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
      <ProTable<Product>
        actionRef={actionRef}
        rowKey="id"
        search={{}}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/device/product/add');
            }}
          >
            <PlusOutlined /> {intl.formatMessage({ id: 'device.product.add' })}
          </Button>,
        ]}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          const adjustedParams = {
            ...rest,
            currPage: current,
            pageSize,
          };
          return getProducts(adjustedParams);
        }}
        columns={columns}
        pagination={{
          pageSize: 10,
        }}
      />
    </PageContainer>
  );
};

export default ProductListPage;
