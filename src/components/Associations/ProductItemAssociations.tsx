import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import React, { useRef } from 'react';
import type { ProductItem } from '@/services/Device/Product/data';
import {
  deleteProductItem,
  getProductItems,
} from '@/services/Device/Product/service';

type ItemsProps = {
  productId: string;
};

const ProductItemAssociations: React.FC<ItemsProps> = ({ productId }) => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const columns: ProColumns<ProductItem>[] = [
    {
      title: intl.formatMessage({ id: 'device.product.item.deviceCode' }),
      dataIndex: 'deviceCode',
    },
    {
      title: intl.formatMessage({ id: 'device.product.item.deviceName' }),
      dataIndex: 'deviceName',
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() =>
            history.push(`/device/product/${productId}/item/edit/${record.id}`)
          }
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({
            id: 'device.product.item.delete.confirm',
          })}
          onConfirm={async () => {
            await deleteProductItem(productId, record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <ProTable<ProductItem>
      headerTitle={intl.formatMessage({
        id: 'device.product.item.list.title',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      toolBarRender={() => [
        <Button
          type="primary"
          key="primary"
          onClick={() => history.push(`/device/product/${productId}/item/add`)}
        >
          <PlusOutlined />{' '}
          {intl.formatMessage({ id: 'device.product.item.add' })}
        </Button>,
      ]}
      request={() => getProductItems(productId)}
      columns={columns}
      pagination={false}
    />
  );
};

export default ProductItemAssociations;
