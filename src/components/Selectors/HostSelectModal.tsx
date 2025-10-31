import type { ProColumns } from '@ant-design/pro-components';
import SelectModal from '@/components/Common/SelectModal';
import type { Host } from '@/services/Device/Host/data';
import { getHosts } from '@/services/Device/Host/service';

export type HostSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (host: Host) => void;
};

const HostSelectModal = ({
  open,
  onCancel,
  onSelect,
}: HostSelectModalProps) => {
  const columns: ProColumns<Host>[] = [
    {
      title: '编码',
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: '名称',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
      sorter: true,
    },
  ];

  return (
    <SelectModal<Host>
      title="选择主机"
      headerTitle="主机列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getHosts}
      columns={columns}
    />
  );
};

export default HostSelectModal;
