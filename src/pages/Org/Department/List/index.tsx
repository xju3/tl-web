import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { Department } from '@/services/Org/Department/data';
import {
  deleteDepartment,
  getDepartments,
} from '@/services/Org/Department/service';

const SESSION_KEY = 'departmentListState';

const DepartmentListPage = () => {
  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Department>[] => [
    {
      title: intl.formatMessage({ id: 'page.org.department.code' }),
      dataIndex: 'code',
      valueType: 'text',
      sorter: {
        multiple: 2,
      },
    },
    {
      title: intl.formatMessage({ id: 'page.org.department.name' }),
      dataIndex: 'name',
      valueType: 'text',
      sorter: {
        multiple: 1,
      },
    },
  ];

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
