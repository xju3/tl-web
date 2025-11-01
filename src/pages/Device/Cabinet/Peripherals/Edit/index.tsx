import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { CabinetPeripheralEntity } from '@/components/Entities/CabinetPeripheralEntity';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';
import {
  addCabinetPeripheral,
  getCabinetPeripheralById,
  updateCabinetPeripheral,
} from '@/services/Device/Cabinet/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<CabinetPeripheral>>;
}

const CabinetPeripheralForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>
      {buildFormFields<CabinetPeripheral>(
        CabinetPeripheralEntity,
        intl,
        formRef,
      )}
    </>
  );
};

const CabinetPeripheralBindPage: React.FC = () => {
  const services = {
    addItem: addCabinetPeripheral,
    updateItem: updateCabinetPeripheral,
    getItemById: getCabinetPeripheralById,
  };

  const backRoute = '/device/cabinets';

  return (
    <EditPage<CabinetPeripheral> services={services} backRoute={backRoute}>
      <CabinetPeripheralForm />
    </EditPage>
  );
};

export default CabinetPeripheralBindPage;
