import { useIntl } from '@@/exports';
import type { ProFormInstance } from '@ant-design/pro-components';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { TenantProductEntity } from '@/components/Entities/Org/TenantProductEntity';
import type { TenantProduct } from '@/services/Org/Tenant/data';
import {
  createTenantProduct,
  getTenantProductById,
  updateTenantProduct,
} from '@/services/Org/Tenant/service';

interface FormProps {
  formRef?: React.RefObject<ProFormInstance<TenantProduct>>;
}

const EditForm: React.FC<FormProps> = ({ formRef }) => {
  const intl = useIntl();
  return (
    <>{buildFormFields<TenantProduct>(TenantProductEntity, intl, formRef)}</>
  );
};

const TenantProductEditPage = () => {
  const services = {
    addItem: createTenantProduct,
    updateItem: updateTenantProduct,
    getItemById: getTenantProductById,
  };

  return (
    <EditPage<TenantProduct> services={services}>
      <EditForm />
    </EditPage>
  );
};

export default TenantProductEditPage;
