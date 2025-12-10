import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { MaterialEntity } from '@/components/Entities/Manufacture/MaterialEntity';
import type { Material } from '@/services/Manufacture/Material/data';
import {
  deleteMaterial,
  getMaterials,
} from '@/services/Manufacture/Material/service';

const SESSION_KEY = 'materialListState';

const MaterialListPage = () => {
  const services = {
    getList: getMaterials,
    deleteItem: deleteMaterial,
  };

  const routes = {
    add: '/manufacture/material/add',
    edit: '/manufacture/material/edit',
    view: '/manufacture/material/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Material>[] => buildTableColumns(MaterialEntity, intl);

  return (
    <ListPage<Material>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default MaterialListPage;
