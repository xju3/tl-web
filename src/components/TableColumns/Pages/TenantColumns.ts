import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { TenantEntity } from '@/components/TableEntities/TenantEntity';
import type { Tenant } from '@/services/Org/Tenant/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Tenant>[] => buildTableColumns(TenantEntity, intl);
