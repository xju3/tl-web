import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { MaterialEntity } from '@/components/Entities/Manufacture/MaterialEntity';
import type { Material } from '@/services/Manufacture/Material/data';
import {
  deleteMaterial,
  getMaterialById,
} from '@/services/Manufacture/Material/service';

const MaterialViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Material>
      title={intl.formatMessage({ id: 'device.host.view.title' })}
      description={(host) => host.name}
      getById={getMaterialById}
      deleteById={deleteMaterial}
      editUrl="/device/hosts/edit"
      listUrl="/device/hosts"
      columns={buildDescriptions(MaterialEntity, intl)}
    />
  );
};

export default MaterialViewPage;
