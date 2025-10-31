import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { EmployeeEntity } from '@/components/TableEntities/EmployeeEntity';
import type { Employee } from '@/services/Org/Employee/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Employee>[] => buildTableColumns(EmployeeEntity, intl);
