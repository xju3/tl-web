import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetCableEntity } from '@/components/TableEntities/CabinetCableEntity';
import type { CabinetCable } from '@/services/Device/Cabinet/data';
import {
  deleteCabinetCable,
  getCabinetCables,
} from '@/services/Device/Cabinet/service';

type CablesProps = {
  cabinetId: string;
};

const getCabinetCableColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetCable>[] =>
  buildTableColumns(CabinetCableEntity, intl);

const CabinetCableAssociations: React.FC<CablesProps> = ({ cabinetId }) => {
  const intl = useIntl();

  return (
    <AssociationList<CabinetCable>
      parentId={cabinetId}
      services={{
        getPage: getCabinetCables,
        deleteItem: deleteCabinetCable,
      }}
      columns={getCabinetCableColumns(intl)}
      addRoute={`/device/cabinets/${cabinetId}/cables/add/edit`}
      editRoutePattern={`/device/cabinets/:parentId/cables/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.cable.list.title',
      })}
      pagination={true}
    />
  );
};

export default CabinetCableAssociations;
