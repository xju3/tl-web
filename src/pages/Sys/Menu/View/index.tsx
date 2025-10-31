import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import type { Menu } from '@/services/Sys/Menu/data';
import { deleteMenu, getMenuById } from '@/services/Sys/Menu/service';

const MenuViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<Menu>[] = [
    {
      title: intl.formatMessage({ id: 'sys.menu.parentId' }),
      dataIndex: 'parentId',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.path' }),
      dataIndex: 'path',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.component' }),
      dataIndex: 'component',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.icon' }),
      dataIndex: 'icon',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.type' }),
      dataIndex: 'type',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.sortOrder' }),
      dataIndex: 'sortOrder',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.visible' }),
      dataIndex: 'visible',
    },
    {
      title: intl.formatMessage({ id: 'sys.menu.permission' }),
      dataIndex: 'permission',
    },
  ];

  return (
    <ViewPage<Menu>
      title={intl.formatMessage({ id: 'sys.menu.view' })}
      description={intl.formatMessage({ id: 'sys.menu.view' })}
      getById={getMenuById}
      deleteById={deleteMenu}
      editUrl="/sys/menu/edit"
      listUrl="/sys/menu"
      columns={columns}
    />
  );
};

export default MenuViewPage;
