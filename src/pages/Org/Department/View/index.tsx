import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { DepartmentEntity } from '@/components/Entities/Org/DepartmentEntity';
import type { Department } from '@/services/Org/Department/data';
import {
  deleteDepartment,
  getDepartmentById,
} from '@/services/Org/Department/service';

const DepartmentViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Department>
      title={intl.formatMessage({ id: 'org.department.view' })}
      description={(department) => department.name}
      getById={getDepartmentById}
      deleteById={deleteDepartment}
      editUrl="/org/departments/edit"
      listUrl="/org/departments"
      columns={buildDescriptions(DepartmentEntity, intl)}
    />
  );
};

export default DepartmentViewPage;
