import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { InstCabinetGroupEntity } from '@/components/Entities/Inst/InstCabinetGroupEntity';
import type { InstCabinetGroup } from '@/services/Inst/Group/data';
import {
  createInstCabinetGroup,
  deleteInstCabinetGroup,
  getInstCabinetGroups,
} from '@/services/Inst/Group/service';

const SESSION_KEY = 'cabinetListState';

const InstCabinetListPage = () => {
  const services = {
    getList: getInstCabinetGroups,
    addItem: createInstCabinetGroup,
    deleteItem: deleteInstCabinetGroup,
  };

  const routes = {
    add: '/inst/cabinet-group/create',
    edit: '/inst/cabinet-group/edit',
    view: '/inst/cabinet-group/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<InstCabinetGroup>[] =>
    buildTableColumns(InstCabinetGroupEntity, intl);

  return (
    <ListPage<InstCabinetGroup>
      services={services}
      columns={columns}
      showIndexColumn={false}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default InstCabinetListPage;
