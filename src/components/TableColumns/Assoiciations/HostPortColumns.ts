import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { HostPortEntity } from '@/components/TableEntities/HostPortEntity';
import type { HostSerialPort } from '@/services/Device/Host/data';

export const getHostPortColumns = (
  intl: IntlShape,
): CustomProColumns<HostSerialPort>[] =>
  buildTableColumns(HostPortEntity, intl);
