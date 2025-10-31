import { useIntl } from '@umijs/max';
import React from 'react';
import { getCabinetPeripheralColumns } from '@/components/Columns/Assoiciations/CabinetPeripheralColumns';
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

  return (
    <AssociationList<Peripheral>
      parentId={cabinetId}
      services={{
        getPage: getPeripheralsByCabinetId,
        deleteItem: deleteCabinetPeripheral,
      }}
      columns={getCabinetPeripheralColumns(intl)}
      addRoute={`/device/cabinets/${cabinetId}/bind`}
      editRoutePattern={`/device/cabinets/bindings/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.peripheral.list.title',
      })}
    />
  );
};

export default CabinetPeripheralAssociations;
