import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetEntity } from '@/components/TableEntities/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Cabinet>[] => buildTableColumns(CabinetEntity, intl);
