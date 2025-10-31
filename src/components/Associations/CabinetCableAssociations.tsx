import type { ProColumns } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import AssociationList from '@/components/Common/Association/List';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetCable,
  getCabinetCables,
} from '@/services/Device/Cabinet/service';

type CablesProps = {
  cabinetId: string;
};

const CabinetCableAssociations: React.FC<CablesProps> = ({ cabinetId }) => {
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
  ];

  return (
    <AssociationList<CabinetCable>
      parentId={cabinetId}
      services={{
        getPage: getCabinetCables,
        deleteItem: deleteCabinetCable,
      }}
      columns={columns}
      addRoute={`/device/cabinets/${cabinetId}/cables/add/edit`}
      editRoutePattern={`/device/cabinets/:parentId/cables/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.cable.list.title',
      })}
    />
  );
};

export default CabinetCableAssociations;
