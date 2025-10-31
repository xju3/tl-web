import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { CabinetUsageEntity } from '@/components/TableEntities/CabinetUsageEntity';
import type { CabinetPeripheralUsage } from '@/services/Device/Cabinet/data';

export const getCabinetUsageColumns = (
  intl: IntlShape,
): CustomProColumns<CabinetPeripheralUsage>[] =>
  buildTableColumns(CabinetUsageEntity, intl);
