import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { PeripheralInstructionEntity } from '@/components/Entities/PeripheralInstructionEntity';
import type { Instruction } from '@/services/Device/Peripheral/data';
import { getInstructions } from '@/services/Device/Peripheral/service';

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
      }}
      columns={getPeripheralInstructionColumns(intl)}
      addRoute={`/device/peripherals/${peripheralId}/instructions/edit`}
      editRoutePattern={`/device/peripherals/:parentId/instructions/edit/:id`}
      headerTitle={intl.formatMessage({
        id: 'device.peripheral.instruction.list.title',
      })}
      pagination={true}
    />
  );
};

export default PeripheralInstructionAssociations;
