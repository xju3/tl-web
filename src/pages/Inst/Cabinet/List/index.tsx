import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { InstCabinetEntity } from '@/components/Entities/Inst/InstCabinetEntity';
import type { InstCabinet } from '@/services/Inst/Cabinet/data';
import { getInstCabinets } from '@/services/Inst/Cabinet/service';

const SESSION_KEY = 'cabinetListState';

const InstCabinetListPage = () => {
  const services = {
    getList: getInstCabinets,
  };

  const routes = {
    edit: '/inst/cabinets/edit',
    view: '/inst/cabinets/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<InstCabinet>[] =>
    buildTableColumns(InstCabinetEntity, intl);

  return (
    <ListPage<InstCabinet>
      services={services}
      columns={columns}
      showIndexColumn={false}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default InstCabinetListPage;
