import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { AppEntity } from '@/components/Entities/Sys/AppEntity';
import type { App } from '@/services/Sys/App/data';
import { deleteApp, getAppById } from '@/services/Sys/App/service';

const AppViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<App>
      title={intl.formatMessage({ id: 'sys.app.view' })}
      description={(app) => app.name}
      getById={getAppById}
      deleteById={deleteApp}
      editUrl="/sys/app/edit"
      listUrl="/sys/app"
      columns={buildDescriptions(AppEntity, intl)}
    />
  );
};

export default AppViewPage;
