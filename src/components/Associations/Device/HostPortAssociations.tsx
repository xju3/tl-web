import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { HostSerialPortEntity } from '@/components/Entities/Device/HostSerialPortEntity';
import type { HostSerialPort } from '@/services/Device/Host/data';
import {
  deleteHostPort,
  getHostSerialPorts,
} from '@/services/Device/Host/service';

type PortsProps = {
  hostId: string;
};

const columns = (intl: IntlShape): CustomProColumns<HostSerialPort>[] =>
  buildTableColumns(HostSerialPortEntity, intl);

const HostPortAssociations: React.FC<PortsProps> = ({ hostId }) => {
  const intl = useIntl();

  return (
    <AssociationList<HostSerialPort>
      parentId={hostId}
      services={{
        getPage: getHostSerialPorts,
        deleteItem: deleteHostPort,
      }}
      columns={columns(intl)}
      addRoute={`/device/hosts/${hostId}/ports/create`}
      editRoutePattern={`/device/hosts/${hostId}/ports/:id/edit`}
      pagination={true}
    />
  );
};

export default HostPortAssociations;
