import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Descriptions, message, Popconfirm, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import type {
  Product,
  ProductItem,
} from '../../../../services/Device/Product/data';
import {
  deleteProduct,
  deleteProductItem,
  getProductById,
  getProductItems,
} from '../../../../services/Device/Product/service';

const ProductViewPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  useEffect(() => {
    if (id) {
      getProductById(id).then((res) => {
        setProduct(res);
      });
    }
  }, [id]);

  const itemsColumns: ProColumns<ProductItem>[] = [
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
            history.push(`/device/product/${id}/item/edit/${record.id}`)
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
            if (id) {
              await deleteProductItem(id, record.id);
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
      {product && (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card>
            <Descriptions
              title={intl.formatMessage({ id: 'device.host.basic-info.title' })}
              bordered
              extra={
                <Space size={1}>
                  <Button
                    type="primary"
                    onClick={() => history.push(`/device/product/edit/${id}`)}
                  >
                    {intl.formatMessage({ id: 'common.actions.edit' })}
                  </Button>
                  ,
                  <Popconfirm
                    key="delete"
                    title={intl.formatMessage({
                      id: 'device.peripheral.delete.confirm',
                    })}
                    onConfirm={async () => {
                      if (id) {
                        await deleteProduct(id);
                        history.push('/device/cabinets');
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
                label={intl.formatMessage({ id: 'device.product.code' })}
              >
                {product.code}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'device.product.name' })}
              >
                {product.name}
              </Descriptions.Item>
              <Descriptions.Item
                label={intl.formatMessage({ id: 'device.product.m_date' })}
              >
                {product.m_date}
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card>
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
                  onClick={() => history.push(`/device/product/${id}/item/add`)}
                >
                  <PlusOutlined />{' '}
                  {intl.formatMessage({ id: 'device.product.item.add' })}
                </Button>,
              ]}
              request={() => getProductItems(id!)}
              columns={itemsColumns}
              pagination={false}
            />
          </Card>
        </Space>
      )}
    </PageContainer>
  );
};

export default ProductViewPage;
