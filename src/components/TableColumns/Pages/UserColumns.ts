import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { UserEntity } from '@/components/TableEntities/UserEntity';
import type { User } from '@/services/Sys/User/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<User>[] => buildTableColumns(UserEntity, intl);
