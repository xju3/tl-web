import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/TableEntities/Builder';
import { SerialPortEntity } from '@/components/TableEntities/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';

export const columns = (
  saveStateAndNavigate: (path: string, id?: string) => void,
  intl: any,
): CustomProColumns<SerialPort>[] => buildTableColumns(SerialPortEntity, intl);
