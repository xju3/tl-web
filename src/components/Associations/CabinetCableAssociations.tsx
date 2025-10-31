import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm, Space } from 'antd';
import React, { useRef } from 'react';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetCable,
  getCabinetCables,
} from '@/services/Device/Cabinet/service';

type CablesProps = {
  cabinetId: string;
};

const CabinetCableAssociations: React.FC<CablesProps> = ({ cabinetId }) => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const columns: ProColumns<CabinetCable>[] = [
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
            history.push(
              `/device/cabinets/${cabinetId}/cables/${record.id}/edit`,
            );
          }}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            await deleteCabinetCable(cabinetId, record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <ProTable<CabinetCable>
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.cable.list.title',
      })}
      actionRef={actionRef}
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
                history.push(`/device/cabinets/${cabinetId}/cables/add/edit`);
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
      request={(params) => getCabinetCables(cabinetId, params)}
      columns={columns}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default CabinetCableAssociations;
