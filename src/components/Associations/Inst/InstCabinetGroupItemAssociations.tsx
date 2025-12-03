import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { InstCabinetGroupItemEntity } from '@/components/Entities/Inst/InstCabinetGroupItemEntity';
import type { InstCabinetGroupItem } from '@/services/Inst/Group/data';
import {
  deleteInstCabinetGroupItem,
  getInstCabinetGroupItems,
} from '@/services/Inst/Group/service';

type InstCabinetGroupItemProps = {
  instCabinetGroupId: string;
};

const getInstCabinetGroupItemColumns = (
  intl: IntlShape,
): CustomProColumns<InstCabinetGroupItem>[] =>
  buildTableColumns(InstCabinetGroupItemEntity, intl);

const CabinetCableAssociations: React.FC<InstCabinetGroupItemProps> = ({
  instCabinetGroupId,
}) => {
  const intl = useIntl();

  return (
    <AssociationList<InstCabinetGroupItem>
      parentId={instCabinetGroupId}
      services={{
        getPage: getInstCabinetGroupItems,
        deleteItem: deleteInstCabinetGroupItem,
      }}
      columns={getInstCabinetGroupItemColumns(intl)}
      addRoute={`/inst/cabinet-group/${instCabinetGroupId}/items/add`}
      editRoutePattern={`/inst/cabinet-group/${instCabinetGroupId}/items/:id/edit`}
      pagination={true}
    />
  );
};

export default CabinetCableAssociations;
