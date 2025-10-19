import { MoreOutlined, ScanOutlined } from '@ant-design/icons';
import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PeripheralSelectModal from '../../../../components/Selectors/PeripheralSelectModal';
import type { Peripheral } from '../../Peripherals/data';
import type { Cabinet } from '../data';
import {
  addCabinetPeripheral,
  getCabinetById,
  getCabinetPeripheralById,
  updateCabinetPeripheral,
} from '../service';

const CabinetPeripheralBindPage = () => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { cabinetId, bindingId } = useParams<{
    cabinetId: string;
    bindingId: string;
  }>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const isEdit = !!bindingId;

  useEffect(() => {
    if (isEdit) {
      getCabinetPeripheralById(bindingId).then((data) => {
        form.setFieldsValue(data);
      });
    } else {
      form.setFieldsValue({
        id: uuidv4(),
        cabinetId: cabinetId,
        quantity: 1,
      });
    }
  }, [bindingId, cabinetId, form, isEdit]);

  const handleSelectPeripheral = (peripheral: Peripheral) => {
    form.setFieldsValue({
      peripheralId: peripheral.id,
      code: peripheral.code,
      name: peripheral.name,
    });
    setIsModalVisible(false);
  };

  const handleSubmit = async (values: any) => {
    if (isEdit) {
      await updateCabinetPeripheral(values);
    } else {
      await addCabinetPeripheral(values);
    }
    history.push(`/device/cabinets/view/${cabinetId || values.cabinetId}`);
  };

  return (
    <PageContainer
      header={{
        title: isEdit ? '编辑外设绑定' : '绑定外设',
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

          <ProFormText
            width="lg"
            name="code"
            label="外设编码"
            disabled={true}
          />

          <ProFormText
            width="lg"
            name="name"
            label="外设名称"
            placeholder="请选择外设"
            disabled
            // 核心：使用 fieldProps 透传 suffix 属性
            fieldProps={{
              suffix: (
                <ScanOutlined
                  onClick={() => setIsModalVisible(true)}
                  style={{
                    cursor: 'pointer',
                    color: '#1677ff', // 使用 AntD 的主色
                  }}
                />
              ),
            }}
          />

          <ProFormDigit
            width="lg"
            name="quantity"
            label="数量"
            min={1}
            step={1}
            fieldProps={{ precision: 0 }}
          />
        </ProForm>
      </Card>
      <PeripheralSelectModal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onSelect={handleSelectPeripheral}
      />
    </PageContainer>
  );
};

export default CabinetPeripheralBindPage;
