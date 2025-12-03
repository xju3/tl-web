import { useIntl } from '@umijs/max';
import ViewPage from '@/components/Common/Pages/View';
import { buildDescriptions } from '@/components/Entities/Builder';
import { InstCabinetGroupEntity } from '@/components/Entities/Inst/InstCabinetGroupEntity';
import InstCabinetGroupViewTabs from '@/components/ViewTabs/InstCabinetGroupViewTabs';
import type { InstCabinetGroup } from '@/services/Inst/Group/data';
import { getInstCabinetGroupById } from '@/services/Inst/Group/service';

const InstCabinetGroupViewPage = () => {
  const intl = useIntl();

  return (
    <ViewPage<InstCabinetGroup>
      title={intl.formatMessage({ id: 'inst.cabinet.group.view' })}
      description={(instCabinetGroup) => instCabinetGroup.name}
      getById={getInstCabinetGroupById}
      editUrl="/inst/cabinet-group/edit"
      listUrl="/inst/cabinet-groups"
      columns={buildDescriptions(InstCabinetGroupEntity, intl)}
      detailsComponent={(instCabinetGroup) => (
        <InstCabinetGroupViewTabs instCabinetGroup={instCabinetGroup} />
      )}
    />
  );
};

export default InstCabinetGroupViewPage;
