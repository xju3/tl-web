import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetCableEntity } from '@/components/TableEntities/CabinetCableEntity';
import { CabinetCablePageEntity } from '@/components/TableEntities/CabinetCablePageEntity';
import type { CabinetCable } from '@/services/Device/Cabinet/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<CabinetCable>[] =>
  buildTableColumns(CabinetCableEntity, intl);
