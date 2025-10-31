import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { PeripheralEntity } from '@/components/TableEntities/PeripheralEntity';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Peripheral>[] => buildTableColumns(PeripheralEntity, intl);
