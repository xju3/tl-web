import { useIntl } from '@umijs/max';
import ViewPage from '@/components/CommonPages/View';
import type { Peripheral } from '@/services/Device/Peripheral/data';
import {
  deletePeripheral,
  getPeripheralById,
} from '@/services/Device/Peripheral/service';
import PeripheralViewTabs from '../../../../components/ViewTabs/PeripheralViewTabs';

const PeripheralViewPage = () => {
  const intl = useIntl();

  const columns = [
    {
      dataIndex: 'code',
      title: intl.formatMessage({ id: 'device.peripheral.code' }),
    },
    {
      dataIndex: 'name',
      title: intl.formatMessage({ id: 'device.peripheral.name' }),
    },
  ];

  return (
    <ViewPage<Peripheral>
      title={intl.formatMessage({ id: 'device.peripheral.view.title' })}
      description={(peripheral) => peripheral.name}
      getById={getPeripheralById}
      deleteById={deletePeripheral}
      editUrl="/device/peripherals/edit"
      listUrl="/device/peripherals"
      columns={columns}
      detailsComponent={(peripheral) => (
        <PeripheralViewTabs peripheral={peripheral} />
      )}
    />
  );
};

export default PeripheralViewPage;
