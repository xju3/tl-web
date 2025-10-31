import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { MenuDescriptions } from '@/components/Descriptions/MenuDescriptions';
import type { Menu } from '@/services/Sys/Menu/data';
import { deleteMenu, getMenuById } from '@/services/Sys/Menu/service';

const MenuViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Menu>
      title={intl.formatMessage({ id: 'sys.menu.view' })}
      description={intl.formatMessage({ id: 'sys.menu.view' })}
      getById={getMenuById}
      deleteById={deleteMenu}
      editUrl="/sys/menu/edit"
      listUrl="/sys/menu"
      columns={MenuDescriptions(intl)}
    />
  );
};

export default MenuViewPage;
