import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { WorkshopEntity } from '@/components/Entities/Manufacture/WorkshopEntity';
import type { Workshop } from '@/services/Manufacture/Workshop/data';
import {
  deleteWorkshop,
  getWorkshops,
} from '@/services/Manufacture/Workshop/service';

const SESSION_KEY = 'materialListState';

const WorkshopListPage = () => {
  const services = {
    getList: getWorkshops,
    deleteItem: deleteWorkshop,
  };

  const routes = {
    add: '/device/hosts/add',
    edit: '/device/hosts/edit',
    view: '/device/hosts/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Workshop>[] => buildTableColumns(WorkshopEntity, intl);

  return (
    <ListPage<Workshop>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default WorkshopListPage;
