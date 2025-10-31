import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import ViewPage from '@/components/CommonPages/View';
import TenantProductViewTabs from '@/components/ViewTabs/TenantProductViewTabs';
import type { Partner } from '@/services/Org/Partner/data';
import { deletePartner, getPartner } from '@/services/Org/Partner/service';

const PartnerViewPage = () => {
  const intl = useIntl();

  const columns: ProDescriptionsItemProps<Partner>[] = [
    {
      title: intl.formatMessage({ id: 'tenant.partner.code' }),
      dataIndex: 'code',
    },
    {
      title: intl.formatMessage({ id: 'tenant.partner.name' }),
      dataIndex: 'name',
    },
    {
      title: intl.formatMessage({ id: 'tenant.partner.address' }),
      dataIndex: 'address',
    },
    {
      title: intl.formatMessage({ id: 'tenant.partner.tenant' }),
      dataIndex: 'tenant',
      valueType: 'select',
      valueEnum: {
        true: {
          text: 'Yes',
        },
        false: {
          text: 'No',
        },
      },
    },
  ];

  return (
    <ViewPage<Partner>
      title={intl.formatMessage({ id: 'tenant.partner.view' })}
      description={intl.formatMessage({ id: 'tenant.partner' })}
      getById={getPartner}
      deleteById={deletePartner}
      editUrl="/tenant/partner/edit"
      listUrl="/tenant/partner/list"
      columns={columns}
      detailsComponent={(data) => <TenantProductViewTabs tenant={data} />}
    />
  );
};

export default PartnerViewPage;
