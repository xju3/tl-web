import { useIntl } from '@umijs/max';
import React from 'react';
import AssociationList from '@/components/Common/Association/List';
import { getCabinetCableColumns } from '@/components/TableColumns/Assoiciations/CabinetCableColumns';
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
    />
  );
};

export default CabinetCableAssociations;
