import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { PeripheralInstructionEntity } from '@/components/Entities/Device/PeripheralInstructionEntity';
import type { Instruction } from '@/services/Device/Peripheral/data';
import {
  deleteInstruction,
  getInstructions,
} from '@/services/Device/Peripheral/service';

type InstructionsProps = {
  peripheralId: string;
};

const getPeripheralInstructionColumns = (
  intl: IntlShape,
): CustomProColumns<Instruction>[] =>
  buildTableColumns(PeripheralInstructionEntity, intl);

const PeripheralInstructionAssociations: React.FC<InstructionsProps> = ({
  peripheralId,
}) => {
  const intl = useIntl();

  return (
    <AssociationList<Instruction>
      parentId={peripheralId}
      services={{
        getPage: getInstructions,
        deleteItem: deleteInstruction,
      }}
      columns={getPeripheralInstructionColumns(intl)}
      addRoute={`/device/peripherals/${peripheralId}/instructions/create`}
      editRoutePattern={`/device/peripherals/${peripheralId}/instructions/:id/edit`}
      pagination={true}
    />
  );
};

export default PeripheralInstructionAssociations;
