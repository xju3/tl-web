import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetCableEntity } from '@/components/TableEntities/CabinetCableEntity';
import type { CabinetCable } from '@/services/Device/Cabinet/data';

export const getCabinetCableColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetCable>[] =>
  buildTableColumns(CabinetCableEntity, intl);
