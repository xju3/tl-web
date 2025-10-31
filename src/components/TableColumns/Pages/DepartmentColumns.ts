import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { DepartmentEntity } from '@/components/TableEntities/DepartmentEntity';
import type { Department } from '@/services/Org/Department/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Department>[] => buildTableColumns(DepartmentEntity, intl);
