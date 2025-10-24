import { PageContainer } from '@ant-design/pro-components';
import { history, useParams } from '@umijs/max';
import { Button } from 'antd';
import { useState } from 'react';
import SerialPortSelectModal from '../../../../components/Selectors/SerialPortSelectModal';
import { updateHostPort } from '../../../../services/Device/Host/service';

const HostPortEditPage = () => {
  const { hostId, portId } = useParams<{ hostId: string; portId: string }>();
  const [selectModalOpen, setSelectModalOpen] = useState(true);

  const handleUpdatePort = async (serialPortId: string) => {
    if (hostId && portId) {
      await updateHostPort(hostId, portId, serialPortId);
      setSelectModalOpen(false);
      history.push(`/device/hosts/view/${hostId}`);
    }
  };

  const handleCancel = () => {
    setSelectModalOpen(false);
    history.push(`/device/hosts/view/${hostId}`);
  };

  return (
    <PageContainer>
      <SerialPortSelectModal
        open={selectModalOpen}
        onCancel={handleCancel}
        onSelect={handleUpdatePort}
      />
    </PageContainer>
  );
};

export default HostPortEditPage;
