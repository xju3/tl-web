import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { RoleEntity } from '@/components/TableEntities/RoleEntity';
import type { Role } from '@/services/Sys/Role/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Role>[] => buildTableColumns(RoleEntity, intl);
