import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { HostSerialPortEntity } from '@/components/Entities/Device/HostSerialPortEntity';
import type { HostSerialPort } from '@/services/Device/Host/data';
import { getHostSerialPorts } from '@/services/Device/Host/service';

export type HostSerialPortSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (host: HostSerialPort) => void;
};

const columns = (intl: any): CustomProColumns<HostSerialPort>[] =>
  buildSelectors(HostSerialPortEntity, intl);

const HostSerialPortSelector = ({
  open,
  onCancel,
  onSelect,
}: HostSerialPortSelectModalProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<HostSerialPort>
      title={intl.formatMessage({ id: 'device.host.selector' })}
      headerTitle={intl.formatMessage({ id: 'device.host.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getHostSerialPorts}
      columns={selectorColumns}
    />
  );
};

export default HostSerialPortSelector;
