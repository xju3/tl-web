import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { HostPortEntity } from '@/components/Entities/Device/HostPortEntity';
import type { HostSerialPort } from '@/services/Device/Host/data';
import { deleteHostPort, getHostPorts } from '@/services/Device/Host/service';

type PortsProps = {
  hostId: string;
};

const getHostPortColumns = (
  intl: IntlShape,
): CustomProColumns<HostSerialPort>[] =>
  buildTableColumns(HostPortEntity, intl);

const HostPortAssociations: React.FC<PortsProps> = ({ hostId }) => {
  const intl = useIntl();

  return (
    <AssociationList<HostSerialPort>
      parentId={hostId}
      services={{
        getPage: getHostPorts,
        deleteItem: deleteHostPort,
      }}
      columns={getHostPortColumns(intl)}
      addRoute={`/device/hosts/${hostId}/ports/add`}
      editRoutePattern={`/device/hosts/${hostId}/ports/:id/edit`}
      headerTitle={intl.formatMessage({
        id: 'device.cabinet.host.list',
      })}
      pagination={true}
    />
  );
};

export default HostPortAssociations;
