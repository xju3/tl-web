import type { ProColumns } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import SelectModal from '@/components/Common/SelectModal';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { getCabinets } from '@/services/Device/Cabinet/service';

export type CabinetSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (cabinet: any) => void;
};

const CabinetSelectModal = ({
  open,
  onCancel,
  onSelect,
}: CabinetSelectModalProps) => {
  const intl = useIntl();

  const columns: ProColumns<Cabinet>[] = [
    {
      title: intl.formatMessage({ id: 'device.product.item.deviceCode' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.product.item.deviceName' }),
      dataIndex: 'name',
      sorter: true,
    },
  ];

  return (
    <SelectModal<Cabinet>
      title={intl.formatMessage({ id: 'device.product.item.select-device' })}
      headerTitle={intl.formatMessage({ id: 'device.cabinet.list.title' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getCabinets}
      columns={columns}
      intl={intl}
    />
  );
};

export default CabinetSelectModal;
