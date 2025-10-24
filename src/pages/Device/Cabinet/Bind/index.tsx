import { ScanOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Card, Form } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CabinetCableSelector from '@/components/Selectors/CabinetCableSelector';
import PeripheralSelectModal from '@/components/Selectors/PeripheralSelectModal';
import type { Cable } from '@/services/Device/Cabinet/data';
import {
  addCabinetPeripheral,
  getCabinetPeripheralById,
  updateCabinetPeripheral,
} from '@/services/Device/Cabinet/service';
import type { Peripheral } from '@/services/Device/Peripheral/data';

const CabinetPeripheralBindPage = () => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { cabinetId: cabinetIdFromUrl, bindingId } = useParams<{
    cabinetId: string;
    bindingId: string;
  }>();
  const [isPeripheralModalVisible, setIsPeripheralModalVisible] =
    useState(false);
  const [isCableModalVisible, setIsCableModalVisible] = useState(false);
  const [cabinetId, setCabinetId] = useState<string | undefined>(
    cabinetIdFromUrl,
  );
  const isEdit = !!bindingId;

  useEffect(() => {
    if (isEdit) {
      getCabinetPeripheralById(bindingId).then((data) => {
        form.setFieldsValue(data);
        setCabinetId(data.cabinetId);
      });
    } else {
      form.setFieldsValue({
        id: uuidv4(),
        cabinetId: cabinetIdFromUrl,
        quantity: 1,
      });
    }
  }, [bindingId, cabinetIdFromUrl, form, isEdit]);

  const handleSelectPeripheral = (peripheral: Peripheral) => {
    form.setFieldsValue({
      peripheralId: peripheral.id,
      code: peripheral.code,
      name: peripheral.name,
    });
    setIsPeripheralModalVisible(false);
  };

  const handleSelectCable = (cable: Cable) => {
    form.setFieldsValue({
      cableId: cable.id,
      cableCode: cable.code,
      cableName: cable.name,
    });
    setIsCableModalVisible(false);
  };

  const handleSubmit = async (values: any) => {
    if (isEdit) {
      await updateCabinetPeripheral(values);
    } else {
      await addCabinetPeripheral(values);
    }
    history.push(
      `/device/cabinets/view/${cabinetIdFromUrl || values.cabinetId}`,
    );
  };

  return (
    <PageContainer
      header={{
        title: isEdit
          ? intl.formatMessage({ id: 'device.cabinet.view.bindPeripheral' })
          : intl.formatMessage({ id: 'device.cabinet.view.bindPeripheral' }),
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProForm
          form={form}
          onFinish={handleSubmit}
          submitter={{
            render: (props, dom) => dom.pop(),
          }}
        >
          <ProForm.Item name="id" hidden />
          <ProForm.Item name="cabinetId" hidden />
          <ProForm.Item name="peripheralId" hidden />
          <ProForm.Item name="cableId" hidden />

          <ProFormText
            width="lg"
            name="code"
            label={intl.formatMessage({ id: 'device.peripheral.code' })}
            disabled={true}
          />

          <ProFormText
            width="lg"
            name="name"
            label={intl.formatMessage({ id: 'device.peripheral.name' })}
            placeholder="请选择外设"
            disabled
            // 核心：使用 fieldProps 透传 suffix 属性
            fieldProps={{
              suffix: (
                <ScanOutlined
                  onClick={() => setIsPeripheralModalVisible(true)}
                  style={{
                    cursor: 'pointer',
                    color: '#1677ff', // 使用 AntD 的主色
                  }}
                />
              ),
            }}
          />

          <ProFormText
            width="lg"
            name="cableCode"
            label={intl.formatMessage({ id: 'device.cabinet.cable.code' })}
            disabled={true}
          />

          <ProFormText
            width="lg"
            name="cableName"
            label={intl.formatMessage({ id: 'device.cabinet.cable.name' })}
            placeholder="请选择线缆"
            disabled
            fieldProps={{
              suffix: (
                <ScanOutlined
                  onClick={() => setIsCableModalVisible(true)}
                  style={{
                    cursor: 'pointer',
                    color: '#1677ff',
                  }}
                />
              ),
            }}
          />

          <ProFormDigit
            width="lg"
            name="quantity"
            label={intl.formatMessage({ id: 'device.peripheral.quantity' })}
            min={1}
            step={1}
            fieldProps={{ precision: 0 }}
          />
        </ProForm>
      </Card>
      <PeripheralSelectModal
        open={isPeripheralModalVisible}
        onCancel={() => setIsPeripheralModalVisible(false)}
        onSelect={handleSelectPeripheral}
      />
      {cabinetId && (
        <CabinetCableSelector
          open={isCableModalVisible}
          cabinetId={cabinetId}
          onCancel={() => setIsCableModalVisible(false)}
          onSelect={handleSelectCable}
        />
      )}
    </PageContainer>
  );
};

export default CabinetPeripheralBindPage;
