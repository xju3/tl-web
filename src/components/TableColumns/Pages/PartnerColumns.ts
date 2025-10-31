import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { PartnerEntity } from '@/components/TableEntities/PartnerEntity';
import type { Partner } from '@/services/Org/Partner/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Partner>[] => buildTableColumns(PartnerEntity, intl);
