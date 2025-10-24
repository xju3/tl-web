import {
  PageContainer,
  ProForm,
  ProFormDigit,
  ProFormText,
} from '@ant-design/pro-components';
import { history, useIntl, useParams } from '@umijs/max';
import { Button, Card, Form } from 'antd';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import CabinetPeripheralSelector from '../../../../../components/Selectors/CabinetPeripheralSelector';
import type {
  Cabinet,
  CabinetPeripheralUsage,
} from '../../../../../services/Device/Cabinet/data';
import {
  addCabinetPeripheralUsage,
  getCabinetById,
  getCabinetPeripheralUsageById,
  updateCabinetPeripheralUsage,
} from '../../../../../services/Device/Cabinet/service';

const CabinetPeripheralUsageEditPage = () => {
  const { cabinetId, id } = useParams<{ cabinetId: string; id: string }>();
  const [form] = Form.useForm<CabinetPeripheralUsage>();
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [cabinet, setCabinet] = useState<Cabinet>();
  const intl = useIntl();

  useEffect(() => {
    if (cabinetId) {
      getCabinetById(cabinetId).then(setCabinet);
    }
    if (id) {
      getCabinetPeripheralUsageById(id).then((data) => {
        form.setFieldsValue(data);
      });
    }
  }, [cabinetId, id, form]);

  const onFinish = async (values: CabinetPeripheralUsage) => {
    if (!cabinetId) return;
    const payload = { ...values, cabinetId, id: id || uuid() };
    if (id) {
      await updateCabinetPeripheralUsage(payload);
    } else {
      await addCabinetPeripheralUsage(payload);
    }
    history.push(`/device/cabinets/view/${cabinetId}?tab=usages`);
  };

  return (
    <PageContainer
      header={{
        title: intl.formatMessage({
          id: id
            ? 'device.cabinet.usage.edit.title'
            : 'device.cabinet.usage.add.title',
        }),
        onBack: () => history.back(),
      }}
    >
      <Card>
        <ProForm form={form} onFinish={onFinish}>
          <ProFormText name="cabinetPeripheralId" hidden />
          <ProFormText
            name="peripheralCode"
            label={intl.formatMessage({ id: 'device.peripheral.code' })}
            disabled
          />
          <ProFormText
            name="peripheralName"
            label={intl.formatMessage({ id: 'device.peripheral.name' })}
            disabled
          />
          <Button onClick={() => setSelectorOpen(true)}>
            {intl.formatMessage({ id: 'common.actions.select' })}
          </Button>
          <ProFormDigit
            name="index"
            label={intl.formatMessage({ id: 'device.cabinet.usage.sequence' })}
          />
        </ProForm>
      </Card>
      {cabinet?.parentId && (
        <CabinetPeripheralSelector
          open={selectorOpen}
          cabinetId={cabinet.parentId}
          onCancel={() => setSelectorOpen(false)}
          onSelect={(p) => {
            form.setFieldsValue({
              cabinetPeripheralId: p.id,
              peripheralCode: p.code,
              peripheralName: p.name,
            });
            setSelectorOpen(false);
          }}
        />
      )}
    </PageContainer>
  );
};

export default CabinetPeripheralUsageEditPage;
