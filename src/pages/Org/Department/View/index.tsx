import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { DepartmentEntity } from '@/components/TableEntities/DepartmentEntity';
import type { Department } from '@/services/Org/Department/data';
import {
  deleteDepartment,
  getDepartmentById,
} from '@/services/Org/Department/service';

const DepartmentViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Department>
      description={intl.formatMessage({
        id: 'org.department.description',
      })}
      title={intl.formatMessage({ id: 'org.department.view' })}
      getById={getDepartmentById}
      deleteById={deleteDepartment}
      editUrl="/org/department/edit"
      listUrl="/org/department"
      columns={buildDescriptions(DepartmentEntity, intl)}
    />
  );
};

export default DepartmentViewPage;
