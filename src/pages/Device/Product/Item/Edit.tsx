import {
  PageContainer,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Descriptions, Form, Space } from 'antd';
import { useEffect, useState } from 'react';
import CabinetSelectModal from '@/components/Selectors/CabinetSelectModal';
import type { ProductItem } from '@/services/Device/Product/data';
import {
  addProductItem,
  updateProductItem,
} from '@/services/Device/Product/service';

const ProductItemEditPage = () => {
  const { productId, itemId } = useParams<{
    productId: string;
    itemId: string;
  }>();
  const [form] = Form.useForm<ProductItem>();
  const intl = useIntl();
  const [selectedDevice, setSelectedDevice] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (itemId) {
      // In edit mode, you would fetch the item's data and set the form
      // For now, we'll just log it.
      console.log('Editing item:', itemId);
    }
  }, [itemId]);

  const onFinish = async (values: ProductItem) => {
    const dataToSave = { ...values, deviceId: selectedDevice.id };
    if (itemId) {
      await updateProductItem(productId!, itemId, dataToSave);
    } else {
      await addProductItem(productId!, dataToSave);
    }
    history.back();
  };

  const handleDeviceSelect = (device: any) => {
    setSelectedDevice(device);
    form.setFieldsValue({
      deviceCode: device.code,
      deviceName: device.name,
    });
    setModalVisible(false);
  };

  return (
    <PageContainer onBack={() => history.back()}>
      <Card>
        <ProForm form={form} onFinish={onFinish}>
          <ProFormText name="id" hidden />
          <ProFormText name="productId" initialValue={productId} hidden />

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

          <Space style={{ marginTop: 16 }}>
            <Button type="primary" onClick={() => setModalVisible(true)}>
              {intl.formatMessage({ id: 'device.product.item.select-device' })}
            </Button>
            <Button type="primary" htmlType="submit">
              {intl.formatMessage({ id: 'common.actions.save' })}
            </Button>
            <Button onClick={() => history.back()}>
              {intl.formatMessage({ id: 'common.actions.cancel' })}
            </Button>
          </Space>
        </ProForm>
      </Card>
      <CabinetSelectModal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSelect={handleDeviceSelect}
      />
    </PageContainer>
  );
};

export default ProductItemEditPage;
