import type { ProColumns } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import AssociationList from '@/components/Common/Association/List';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetPeripheralUsage,
  getCabinetPeripheralUsages,
} from '@/services/Device/Cabinet/service';

type UsagesProps = {
  cabinetId: string;
};

const CabinetUsageAssociations: React.FC<UsagesProps> = ({ cabinetId }) => {
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
  ];

  return (
    <AssociationList<CabinetPeripheralUsage>
      parentId={cabinetId}
      services={{
        getPage: getCabinetPeripheralUsages,
        deleteItem: deleteCabinetPeripheralUsage,
      }}
      columns={columns}
      addRoute={`/device/cabinets/${cabinetId}/usages/add`}
      editRoutePattern={`/device/cabinets/:parentId/usages/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.usage.list.title',
      })}
    />
  );
};

export default CabinetUsageAssociations;
