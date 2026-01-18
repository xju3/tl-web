import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { DepartmentEntity } from '@/components/Entities/Org/DepartmentEntity';
import type { Department } from '@/services/Org/Department/data';
import {
  deleteDepartment,
  getDepartments,
} from '@/services/Org/Department/service';

const SESSION_KEY = 'departmentListState';

const DepartmentListPage = () => {
  const services = {
    getList: getDepartments,
    deleteItem: deleteDepartment,
  };

  const routes = {
    add: '/org/departments/create',
    edit: '/org/departments/edit',
    view: '/org/departments/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Department>[] =>
    buildTableColumns(DepartmentEntity, intl);

  return (
    <ListPage<Department>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default DepartmentListPage;
