import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import { buildFormFields } from '@/components/Entities/Builder';
import { InstCabinetGroupEntity } from '@/components/Entities/Inst/InstCabinetGroupEntity';
import type { InstCabinetGroup } from '@/services/Inst/Group/data';
import {
  createInstCabinetGroup,
  getInstCabinetGroupById,
  updateInstCabinetGroup,
} from '@/services/Inst/Group/service';

const InstCabinetGroupForm: React.FC = () => {
  const intl = useIntl();
  return <>{buildFormFields<InstCabinetGroup>(InstCabinetGroupEntity, intl)}</>;
};

const InstCabinetGroupEditPage = () => {
  const services = {
    addItem: createInstCabinetGroup,
    updateItem: updateInstCabinetGroup,
    getItemById: getInstCabinetGroupById,
  };

  const backRoute = '/inst/cabinet-groups';

  return (
    <EditPage<InstCabinetGroup> services={services} backRoute={backRoute}>
      <InstCabinetGroupForm />
    </EditPage>
  );
};

export default InstCabinetGroupEditPage;
