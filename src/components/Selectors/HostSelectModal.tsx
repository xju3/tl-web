import { useIntl } from '@umijs/max';
import { columns as hostColumns } from '@/components/Columns/Pages/HostColumns';
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
  const intl = useIntl();
  const selectorColumns = hostColumns(() => {}, intl).filter((c) => c.selector);

  return (
    <SelectModal<Host>
      title="选择主机"
      headerTitle="主机列表"
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getHosts}
      columns={selectorColumns}
    />
  );
};

export default HostSelectModal;
