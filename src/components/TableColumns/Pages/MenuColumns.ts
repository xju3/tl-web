import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { MenuEntity } from '@/components/TableEntities/MenuEntity';
import type { Menu } from '@/services/Sys/Menu/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Menu>[] => buildTableColumns(MenuEntity, intl);
