import type { ProColumns } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import AssociationList from '@/components/Common/Association/List';
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
  ];

  return (
    <AssociationList<Peripheral>
      parentId={cabinetId}
      services={{
        getPage: getPeripheralsByCabinetId,
        deleteItem: deleteCabinetPeripheral,
      }}
      columns={columns}
      addRoute={`/device/cabinets/${cabinetId}/bind`}
      editRoutePattern={`/device/cabinets/bindings/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.peripheral.list.title',
      })}
    />
  );
};

export default CabinetPeripheralAssociations;
