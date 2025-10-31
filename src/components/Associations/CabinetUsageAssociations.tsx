import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import React, { useRef } from 'react';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetPeripheralUsage,
  getCabinetPeripheralUsages,
} from '@/services/Device/Cabinet/service';

type UsagesProps = {
  cabinetId: string;
};

const CabinetUsageAssociations: React.FC<UsagesProps> = ({ cabinetId }) => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const columns: ProColumns<CabinetPeripheralUsage>[] = [
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
            history.push(
              `/device/cabinets/${cabinetId}/usages/${record.id}/edit`,
            );
          }}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            await deleteCabinetPeripheralUsage(cabinetId, record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <ProTable<CabinetPeripheralUsage>
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.usage.list.title',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      toolBarRender={() => [
        <Button
          key="add"
          type="primary"
          onClick={() => {
            history.push(`/device/cabinets/${cabinetId}/usages/add`);
          }}
        >
          <PlusOutlined />
          {intl.formatMessage({ id: 'common.actions.add' })}
        </Button>,
      ]}
      request={() => getCabinetPeripheralUsages(cabinetId)}
      columns={columns}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default CabinetUsageAssociations;
