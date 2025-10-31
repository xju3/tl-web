import { useIntl } from '@umijs/max';
import React from 'react';
import { getCabinetUsageColumns } from '@/components/Columns/Assoiciations/CabinetUsageColumns';
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

  return (
    <AssociationList<CabinetPeripheralUsage>
      parentId={cabinetId}
      services={{
        getPage: getCabinetPeripheralUsages,
        deleteItem: deleteCabinetPeripheralUsage,
      }}
      columns={getCabinetUsageColumns(intl)}
      addRoute={`/device/cabinets/${cabinetId}/usages/add`}
      editRoutePattern={`/device/cabinets/:parentId/usages/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.usage.list.title',
      })}
    />
  );
};

export default CabinetUsageAssociations;
