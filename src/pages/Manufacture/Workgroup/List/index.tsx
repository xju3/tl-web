import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { WorkgroupEntity } from '@/components/Entities/Manufacture/WorkgroupEntity';
import type { Workgroup } from '@/services/Manufacture/Workgroup/data';
import {
  deleteWorkgroup,
  getWorkgroups,
} from '@/services/Manufacture/Workgroup/service';

const SESSION_KEY = 'materialListState';

const WorkgroupListPage = () => {
  const services = {
    getList: getWorkgroups,
    deleteItem: deleteWorkgroup,
  };

  const routes = {
    add: '/manufacture/workgroup/create',
    edit: '/manufacture/workgroup/edit',
    view: '/manufacture/workgroup/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Workgroup>[] => buildTableColumns(WorkgroupEntity, intl);

  return (
    <ListPage<Workgroup>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default WorkgroupListPage;
