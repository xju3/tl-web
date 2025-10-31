import {
  ProFormDigit,
  type ProFormInstance,
  ProFormText,
} from '@ant-design/pro-components';
import { useIntl, useParams } from '@umijs/max';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import EditPage from '@/components/CommonPages/Edit';
import CabinetPeripheralSelector from '@/components/Selectors/CabinetPeripheralSelector';
import type {
  Cabinet,
  CabinetPeripheralUsage,
} from '@/services/Device/Cabinet/data';
import {
  addCabinetPeripheralUsage,
  getCabinetById,
  getCabinetPeripheralUsageById,
  updateCabinetPeripheralUsage,
} from '@/services/Device/Cabinet/service';

interface UsageFormProps {
  formRef?: React.RefObject<ProFormInstance<CabinetPeripheralUsage>>;
  cabinetId?: string;
}

const UsageForm: React.FC<UsageFormProps> = ({ formRef, cabinetId }) => {
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [cabinet, setCabinet] = useState<Cabinet>();
  const intl = useIntl();

  useEffect(() => {
    if (cabinetId) {
      getCabinetById(cabinetId).then(setCabinet);
    }
  }, [cabinetId]);

  return (
    <>
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
      {cabinet?.parentId && (
        <CabinetPeripheralSelector
          open={selectorOpen}
          cabinetId={cabinet.parentId}
          onCancel={() => setSelectorOpen(false)}
          onSelect={(p) => {
            formRef?.current?.setFieldsValue({
              cabinetPeripheralId: p.id,
              peripheralCode: p.code,
              peripheralName: p.name,
            });
            setSelectorOpen(false);
          }}
        />
      )}
    </>
  );
};

const CabinetPeripheralUsageEditPage = () => {
  const { cabinetId } = useParams<{ cabinetId: string; id: string }>();

  const services = {
    addItem: addCabinetPeripheralUsage,
    updateItem: updateCabinetPeripheralUsage,
    getItemById: getCabinetPeripheralUsageById,
  };

  const backRoute = `/device/cabinets/view/${cabinetId}?tab=usages`;

  return (
    <EditPage<CabinetPeripheralUsage> services={services} backRoute={backRoute}>
      <UsageForm cabinetId={cabinetId} />
    </EditPage>
  );
};

export default CabinetPeripheralUsageEditPage;
