import { useIntl } from '@umijs/max';
import React from 'react';
import AssociationList from '@/components/Common/Association/List';
import { getPeripheralInstructionColumns } from '@/components/TableColumns/Assoiciations/PeripheralInstructionColumns';
import type { Instruction } from '@/services/Device/Peripheral/data';
import { getInstructions } from '@/services/Device/Peripheral/service';

type InstructionsProps = {
  peripheralId: string;
};

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
      pagination={false}
    />
  );
};

export default PeripheralInstructionAssociations;
