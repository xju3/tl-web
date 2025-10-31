import type { ProColumns } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import AssociationList from '@/components/Common/Association/List';
import type { Instruction } from '@/services/Device/Peripheral/data';
import { getInstructions } from '@/services/Device/Peripheral/service';

type InstructionsProps = {
  peripheralId: string;
};

const PeripheralInstructionAssociations: React.FC<InstructionsProps> = ({
  peripheralId,
}) => {
  const intl = useIntl();

  const columns: ProColumns<Instruction>[] = [
    {
      title: intl.formatMessage({
        id: 'device.peripheral.instruction.instruction',
      }),
      dataIndex: 'instruction',
    },
    {
      title: intl.formatMessage({
        id: 'device.peripheral.instruction.acknowledge',
      }),
      dataIndex: 'acknowledge',
    },
    {
      title: intl.formatMessage({
        id: 'device.peripheral.instruction.comment',
      }),
      dataIndex: 'comment',
    },
  ];

  return (
    <AssociationList<Instruction>
      parentId={peripheralId}
      services={{
        getPage: getInstructions,
      }}
      columns={columns}
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
