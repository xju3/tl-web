import { PlusOutlined } from '@ant-design/icons';
import { useIntl } from '@umijs/max';
import { Button } from 'antd';
import React, { useState } from 'react';
import { getHostPortColumns } from '@/components/Columns/Assoiciations/HostPortColumns';
import AssociationList from '@/components/Common/Association/List';
import SerialPortSelectModal from '@/components/Selectors/SerialPortSelectModal';
import type { HostSerialPort } from '@/services/Device/Host/data';
import {
  addHostPort,
  deleteHostPort,
  getHostPorts,
} from '@/services/Device/Host/service';

type PortsProps = {
  hostId: string;
};

const HostPortAssociations: React.FC<PortsProps> = ({ hostId }) => {
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const intl = useIntl();

  const handleAddPort = async (serialPortId: string) => {
    await addHostPort(hostId, serialPortId);
    setSelectModalOpen(false);
    // The list will be reloaded automatically by the Association component
  };

  return (
    <>
      <AssociationList<HostSerialPort>
        parentId={hostId}
        services={{
          getPage: getHostPorts,
          deleteItem: deleteHostPort,
        }}
        columns={getHostPortColumns(intl)}
        editRoutePattern={`/device/hosts/:parentId/ports/:id/edit`}
        headerTitle={intl.formatMessage({
          id: 'device.host.serial-ports.title',
        })}
        rowKey="hostSerialPortId"
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => setSelectModalOpen(true)}
          >
            <PlusOutlined />{' '}
            {intl.formatMessage({
              id: 'device.host.serial-ports.add',
            })}
          </Button>,
        ]}
      />
      <SerialPortSelectModal
        open={selectModalOpen}
        onCancel={() => setSelectModalOpen(false)}
        onSelect={handleAddPort}
      />
    </>
  );
};

export default HostPortAssociations;
