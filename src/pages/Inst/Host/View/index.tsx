import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { InstHostEntity } from '@/components/Entities/Inst/InstHostEntity';
import type { InstHost } from '@/services/Inst/Host/data';
import { getInstHostById } from '@/services/Inst/Host/service';

const InstHostViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<InstHost>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getInstHostById}
      editUrl="/inst/hosts/edit"
      listUrl="/inst/hosts"
      columns={buildDescriptions(InstHostEntity, intl)}
    />
  );
};

export default InstHostViewPage;
