import ListPage from '@/components/Common/Pages/List';
import { columns } from '@/components/TableColumns/Pages/DepartmentColumns';
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
    add: '/org/department/add',
    edit: '/org/department/edit',
    view: '/org/department/view',
  };

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
