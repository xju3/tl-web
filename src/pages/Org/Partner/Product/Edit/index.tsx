import { useIntl } from '@@/exports';
import type { ProFormInstance } from '@ant-design/pro-components';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { PartnerProductEntity } from '@/components/Entities/Org/PartnerProductEntity';
import type { PartnerProduct } from '@/services/Org/Partner/data';
import {
  createPartnerProduct,
  getPartnerProductById,
  updatePartnerProduct,
} from '@/services/Org/Partner/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<PartnerProduct>>;
}

const EditForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>{buildFormFields<PartnerProduct>(PartnerProductEntity, intl, formRef)}</>
  );
};

const PartnerProductEditPage = () => {
  const services = {
    addItem: createPartnerProduct,
    updateItem: updatePartnerProduct,
    getItemById: getPartnerProductById,
  };

  return (
    <EditPage<PartnerProduct> services={services}>
      <EditForm />
    </EditPage>
  );
};

export default PartnerProductEditPage;
