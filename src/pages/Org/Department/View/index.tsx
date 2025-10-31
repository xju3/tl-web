import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { Department } from '@/services/Org/Department/data';
import {
  deleteDepartment,
  getDepartmentById,
} from '@/services/Org/Department/service';

const DepartmentViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<Department>[] = [
    {
      title: intl.formatMessage({ id: 'page.org.department.parentId' }),
      dataIndex: 'parentId',
    },
    {
      title: intl.formatMessage({ id: 'page.org.department.companyId' }),
      dataIndex: 'companyId',
    },
    {
      title: intl.formatMessage({ id: 'page.org.department.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'page.org.department.code' }),
      dataIndex: 'code',
    },
  ];

  return (
    <ViewPage<Department>
      description={intl.formatMessage({
        id: 'page.org.department.description',
      })}
      title={intl.formatMessage({ id: 'page.org.department.view' })}
      getById={getDepartmentById}
      deleteById={deleteDepartment}
      editUrl="/org/department/edit"
      listUrl="/org/department"
      columns={columns}
    />
  );
};

export default DepartmentViewPage;
