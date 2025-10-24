import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { FormattedMessage, history, useIntl } from '@umijs/max';
import { Button, message, Popconfirm, Space } from 'antd';
import React, { useRef } from 'react';
import type { MaterialFilter, MaterialVo } from '@/services/Tenant/data';
import { deleteMaterial, queryMaterials } from '@/services/Tenant/service';

const MaterialList: React.FC = () => {
  const actionRef = useRef<ActionType | undefined>(undefined);
  const intl = useIntl();

  const handleRemove = async (id: string) => {
    const hide = message.loading(
      intl.formatMessage({ id: 'common.actions.deleting' }),
    );
    try {
      await deleteMaterial(id);
      hide();
      message.success('Deleted successfully');
      actionRef.current?.reload();
    } catch (error) {
      hide();
      message.error('Delete failed, please try again');
    }
  };

  const columns: ProColumns<MaterialVo>[] = [
    {
      title: <FormattedMessage id="tenant.material.code" />,
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: <FormattedMessage id="tenant.material.name" />,
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: <FormattedMessage id="tenant.material.weight" />,
      dataIndex: 'weight',
      sorter: true,
    },
    {
      title: <FormattedMessage id="common.actions" />,
      dataIndex: 'option',
      valueType: 'option',
      width: '180px',
      fixed: 'right',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() => {
            history.push(`/tenant/material/edit/${record.id}`);
          }}
        >
          <FormattedMessage id="common.actions.edit" />
        </a>,
        <a
          key="view"
          onClick={() => {
            history.push(`/tenant/material/view/${record.id}`);
          }}
        >
          <FormattedMessage id="common.actions.view" />
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={() => handleRemove(record.id)}
        >
          <a>
            <FormattedMessage id="common.actions.delete" />
          </a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<MaterialVo, MaterialFilter>
        headerTitle={intl.formatMessage({ id: 'tenant.material.list.title' })}
        actionRef={actionRef}
        rowKey="id"
        search={{}}
        toolbar={{
          title: (
            <Space>
              {' '}
              <Button
                type="primary"
                key="primary"
                onClick={() => {
                  history.push('/tenant/material/edit');
                }}
              >
                <PlusOutlined /> <FormattedMessage id="common.actions.add" />
              </Button>
              ,
            </Space>
          ),
        }}
        request={async (params, sort) => {
          const { current, pageSize, ...filter } = params;
          const sorters = Object.entries(sort).map(([key, value]) => ({
            fieldName: key,
            direction: value === 'ascend' ? 1 : 0,
          }));
          const msg = await queryMaterials(
            { ...filter, sorters },
            {
              currPage: current,
              pageSize,
            },
          );
          return {
            data: msg.body.records,
            success: msg.statusCode === 'OK',
            total: msg.body.total,
          };
        }}
        columns={columns}
      />
    </PageContainer>
  );
};

export default MaterialList;
