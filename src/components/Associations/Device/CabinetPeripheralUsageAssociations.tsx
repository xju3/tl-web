import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import CustomProFormText from '@/components/Common/Form/CustomProFormText';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { CabinetPeripheralUsageEntity } from '@/components/Entities/Device/CabinetPeripheralUsageEntity';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetPeripheralUsage,
  getCabinetPeripheralUsages,
} from '@/services/Device/Cabinet/service';

type UsagesProps = {
  cabinetId: string;
};

const columns = (intl: IntlShape): CustomProColumns<CabinetPeripheralUsage>[] =>
  buildTableColumns(CabinetPeripheralUsageEntity, intl);

const CabinetPeripheralUsageAssociations: React.FC<UsagesProps> = ({
  cabinetId,
}) => {
  const intl = useIntl();

  return (
    <AssociationList<CabinetPeripheralUsage>
      parentId={cabinetId}
      services={{
        getPage: getCabinetPeripheralUsages,
        deleteItem: deleteCabinetPeripheralUsage,
      }}
      columns={columns(intl)}
      addRoute={`/device/cabinets/${cabinetId}/usages/create`}
      editRoutePattern={`/device/cabinets/${cabinetId}/usages/:id/edit`}
      pagination={true}
    />
  );
};

export default CabinetPeripheralUsageAssociations;
