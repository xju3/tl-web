import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { SerialPortEntity } from '@/components/TableEntities/SerialPortEntity';
import type { SerialPort } from '@/services/Device/SerialPort/data';

export const SerialPortDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<SerialPort>[] =>
  buildDescriptions(SerialPortEntity, intl);
