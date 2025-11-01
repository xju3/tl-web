import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl, useParams } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { CabinetUsageEntity } from '@/components/Entities/CabinetUsageEntity';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';
import {
  addCabinetPeripheralUsage,
  getCabinetPeripheralUsageById,
  updateCabinetPeripheralUsage,
} from '@/services/Device/Cabinet/service';

interface UsageFormProps {
  formRef?: React.RefObject<ProFormInstance<CabinetPeripheralUsage>>;
}

const UsageForm: React.FC<UsageFormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>
      {buildFormFields<CabinetPeripheralUsage>(
        CabinetUsageEntity,
        intl,
        formRef,
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
      <UsageForm />
    </EditPage>
  );
};

export default CabinetPeripheralUsageEditPage;
