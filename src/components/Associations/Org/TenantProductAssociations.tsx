import { useIntl } from '@umijs/max';
import React from 'react';
import type { IntlShape } from 'react-intl';
import AssociationList from '@/components/Common/Association/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { TenantProductEntity } from '@/components/Entities/Org/TenantProductEntity';
import {} from '@/services/Org/Partner/service';
import type { TenantProduct } from '@/services/Org/Tenant/data';
import { getTenantProducts } from '@/services/Org/Tenant/service';

type ItemsProps = {
  tenantId: string;
};

const tenantProductColumns = (
  intl: IntlShape,
): CustomProColumns<TenantProduct>[] =>
  buildTableColumns(TenantProductEntity, intl);

const TenantProductAssociations: React.FC<ItemsProps> = ({ tenantId }) => {
  const intl = useIntl();

  return (
    <AssociationList<TenantProduct>
      parentId={tenantId}
      services={{
        getPage: getTenantProducts,
      }}
      columns={tenantProductColumns(intl)}
      addRoute={`/org/tenant/${tenantId}/products/add`}
      editRoutePattern={`/org/tenant/${tenantId}/products/:id/edit`}
      pagination={true}
      showIndexColumn={false}
    />
  );
};

export default TenantProductAssociations;
