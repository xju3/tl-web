import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { ProcessEntity } from '@/components/Entities/Manufacture/ProcessEntity';
import type { Process } from '@/services/Manufacture/Process/data';
import {
  deleteProcess,
  getProcessById,
} from '@/services/Manufacture/Process/service';

const ProcessViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<Process>
      title={intl.formatMessage({ id: 'menu.manufacture.processes.view' })}
      description={(host) => host.name}
      getById={getProcessById}
      deleteById={deleteProcess}
      editUrl="/manufacture/processes/edit"
      listUrl="/manufacture/processes"
      columns={buildDescriptions(ProcessEntity, intl)}
    />
  );
};

export default ProcessViewPage;
