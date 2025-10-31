import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { HostEntity } from '@/components/TableEntities/HostEntity';
import type { Host } from '@/services/Device/Host/data';
import { getHosts } from '@/services/Device/Host/service';

export type HostSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (host: Host) => void;
};

const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Host>[] => buildTableColumns(HostEntity, intl);

const HostSelectModal = ({
  open,
  onCancel,
  onSelect,
}: HostSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(() => {}, intl).filter((c) => c.selector);

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
