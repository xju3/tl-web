import { useIntl } from '@umijs/max';
import React from 'react';
import EditPage from '@/components/Common/Pages/Edit';
import CustomProFormText from '@/components/Customization/Form/CustomProFormText';
import type { Department } from '@/services/Org/Department/data';
import {
  addDepartment,
  getDepartmentById,
  updateDepartment,
} from '@/services/Org/Department/service';
import { validationRules } from '@/utils/validation';

const DepartmentForm: React.FC = () => {
  const intl = useIntl();
  const rules = validationRules(intl);

  return (
    <>
      <CustomProFormText
        name="parentId"
        label={intl.formatMessage({ id: 'page.org.department.parentId' })}
      />
      <CustomProFormText
        name="companyId"
        label={intl.formatMessage({ id: 'page.org.department.companyId' })}
      />
      <CustomProFormText
        name="name"
        rules={[rules.required('page.org.department.name')]}
        label={intl.formatMessage({ id: 'page.org.department.name' })}
      />
      <CustomProFormText
        name="code"
        rules={[rules.required('page.org.department.code')]}
        label={intl.formatMessage({ id: 'page.org.department.code' })}
      />
    </>
  );
};

const DepartmentEditPage = () => {
  const services = {
    addItem: addDepartment,
    updateItem: updateDepartment,
    getItemById: getDepartmentById,
  };

  const backRoute = '/org/department';

  return (
    <EditPage<Department> services={services} backRoute={backRoute}>
      <DepartmentForm />
    </EditPage>
  );
};

export default DepartmentEditPage;
