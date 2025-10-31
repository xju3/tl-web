import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetPeripheralEntity } from '@/components/TableEntities/CabinetPeripheralEntity';
import type { CabinetPeripheral } from '@/services/Device/Cabinet/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<CabinetPeripheral>[] =>
  buildTableColumns(CabinetPeripheralEntity, intl);
