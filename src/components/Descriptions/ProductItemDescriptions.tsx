import { Descriptions } from 'antd';
import type { IntlShape } from 'react-intl';

interface ProductItemDescriptionsProps {
  selectedDevice: any;
  intl: IntlShape;
}

const ProductItemDescriptions: React.FC<ProductItemDescriptionsProps> = ({
  selectedDevice,
  intl,
}) => {
  return (
    <Descriptions
      title={intl.formatMessage({
        id: 'device.product.item.selected-device',
      })}
      bordered
    >
      <Descriptions.Item
        label={intl.formatMessage({
          id: 'device.product.item.deviceCode',
        })}
      >
        {selectedDevice?.code || 'N/A'}
      </Descriptions.Item>
      <Descriptions.Item
        label={intl.formatMessage({
          id: 'device.product.item.deviceName',
        })}
      >
        {selectedDevice?.name || 'N/A'}
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ProductItemDescriptions;
