import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { CabinetUsageEntity } from '@/components/Entities/Device/CabinetUsageEntity';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetPeripheralUsage,
  getCabinetPeripheralUsages,
} from '@/services/Device/Cabinet/service';

type UsagesProps = {
  cabinetId: string;
};

const getCabinetUsageColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetPeripheralUsage>[] =>
  buildTableColumns(CabinetUsageEntity, intl);

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
      pagination={true}
    />
  );
};

export default CabinetUsageAssociations;
