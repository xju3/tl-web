import type { ProFormInstance } from '@ant-design/pro-components';
import { useParams } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CabinetUsageFormFields from '@/components/FormFields/CabinetUsageFormFields';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import {
  addCabinetPeripheralUsage,
  getCabinetPeripheralUsageById,
  updateCabinetPeripheralUsage,
} from '@/services/Device/Cabinet/service';

interface UsageFormProps {
  formRef?: React.RefObject<ProFormInstance<CabinetPeripheralUsage>>;
  cabinetId?: string;
}

const UsageForm: React.FC<UsageFormProps> = ({ formRef, cabinetId }) => {
  return <CabinetUsageFormFields formRef={formRef} cabinetId={cabinetId} />;
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
