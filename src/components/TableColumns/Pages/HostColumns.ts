import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { HostEntity } from '@/components/TableEntities/HostEntity';
import type { Host } from '@/services/Device/Host/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<Host>[] => buildTableColumns(HostEntity, intl);
