import type { ProFormInstance } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { InstCabinetGroupItemEntity } from '@/components/Entities/Inst/InstCabinetGroupItemEntity';
import type { InstCabinetGroupItem } from '@/services/Inst/Group/data';
import {
  createInstCabinetGroupItem,
  getInstCabinetGroupItemById,
  updateInstCabinetGroupItem,
} from '@/services/Inst/Group/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<InstCabinetGroupItem>>;
}

const PageForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>
      {buildFormFields<InstCabinetGroupItem>(
        InstCabinetGroupItemEntity,
        intl,
        formRef,
      )}
    </>
  );
};

const PeripheralInstructionPage = () => {
  const services = {
    addItem: createInstCabinetGroupItem,
    updateItem: updateInstCabinetGroupItem,
    getItemById: getInstCabinetGroupItemById,
  };

  return (
    <EditPage<InstCabinetGroupItem> services={services}>
      <PageForm />
    </EditPage>
  );
};

export default PeripheralInstructionPage;
