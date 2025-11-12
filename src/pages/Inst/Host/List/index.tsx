import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { InstHostEntity } from '@/components/Entities/Inst/InstHostEntity';
import type { InstHost } from '@/services/Inst/Host/data';
import { getInstHosts } from '@/services/Inst/Host/service';

const SESSION_KEY = 'hostListState';

const InstHostListPage = () => {
  const services = {
    getList: getInstHosts,
  };

  const routes = {
    edit: '/inst/hosts/edit',
    view: '/inst/hosts/view',
  };

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<InstHost>[] => buildTableColumns(InstHostEntity, intl);

  return (
    <ListPage<InstHost>
      services={services}
      columns={columns}
      routes={routes}
      sessionKey={SESSION_KEY}
    />
  );
};

export default InstHostListPage;
