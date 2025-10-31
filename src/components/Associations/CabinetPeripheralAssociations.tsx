import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import {
  deleteCabinetPeripheral,
  getPeripheralsByCabinetId,
} from '@/services/Device/Cabinet/service';
import type { Peripheral } from '@/services/Device/Peripheral/data';

type PeripheralsProps = {
  cabinetId: string;
};

const CabinetPeripheralAssociations: React.FC<PeripheralsProps> = ({
  cabinetId,
}) => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const columns: ProColumns<Peripheral>[] = [
    {
      title: intl.formatMessage({ id: 'device.peripheral.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.code' }),
      dataIndex: 'cableCode',
    },
    {
      title: intl.formatMessage({ id: 'device.cabinet.cable.name' }),
      dataIndex: 'cableName',
    },
    {
      title: intl.formatMessage({ id: 'device.peripheral.quantity' }),
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
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            await deleteCabinetPeripheral(cabinetId, record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <ProTable<Peripheral>
      headerTitle={intl.formatMessage({
        id: 'device.peripheral.list.title',
      })}
      actionRef={actionRef}
      rowKey="id"
      search={false}
      toolbar={{
        title: (
          <Button
            key="bind"
            type="primary"
            onClick={() => {
              history.push(`/device/cabinets/${cabinetId}/bind`);
            }}
          >
            <PlusOutlined />
            {intl.formatMessage({
              id: 'device.cabinet.bind.peripheral',
            })}
          </Button>
        ),
      }}
      request={(params) => getPeripheralsByCabinetId(cabinetId, params)}
      columns={columns}
      pagination={{
        pageSize: 10,
      }}
    />
  );
};

export default CabinetPeripheralAssociations;
