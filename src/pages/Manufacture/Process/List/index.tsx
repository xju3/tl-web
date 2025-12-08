import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { ProcessEntity } from '@/components/Entities/Manufacture/ProcessEntity';
import type { Process } from '@/services/Manufacture/Process/data';
import {
  deleteProcess,
  getProcessList,
} from '@/services/Manufacture/Process/service';

const SESSION_KEY = 'materialListState';

const ProcessListPage = () => {
  const services = {
    getList: getProcessList,
    deleteItem: deleteProcess,
  };

  const routes = {
    add: '/manufacture/process/add',
    edit: '/device/hosts/edit',
    view: '/device/hosts/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Process>[] => buildTableColumns(ProcessEntity, intl);

  return (
    <ListPage<Process>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default ProcessListPage;
