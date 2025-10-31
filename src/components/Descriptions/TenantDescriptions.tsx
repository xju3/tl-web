import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { TenantEntity } from '@/components/TableEntities/TenantEntity';
import type { Tenant } from '@/services/Org/Tenant/data';

export const TenantDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Tenant>[] => buildDescriptions(TenantEntity, intl);
