import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetPeripheralEntity } from '@/components/TableEntities/CabinetPeripheralEntity';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export const getCabinetPeripheralColumns = (
  intl: IntlShape,
): CustomProColumns<Peripheral>[] =>
  buildTableColumns(CabinetPeripheralEntity, intl);
