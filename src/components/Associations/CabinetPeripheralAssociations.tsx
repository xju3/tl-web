import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { CabinetPeripheralEntity } from '@/components/Entities/CabinetPeripheralEntity';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetPeripheral,
  getPeripheralsByCabinetId,
} from '@/services/Device/Cabinet/service';

type PeripheralsProps = {
  cabinetId: string;
};

const getCabinetPeripheralColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetPeripheral>[] =>
  buildTableColumns(CabinetPeripheralEntity, intl);

const CabinetPeripheralAssociations: React.FC<PeripheralsProps> = ({
  cabinetId,
}) => {
  const intl = useIntl();

  return (
    <AssociationList<CabinetPeripheral>
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
      pagination={true}
    />
  );
};

export default CabinetPeripheralAssociations;
