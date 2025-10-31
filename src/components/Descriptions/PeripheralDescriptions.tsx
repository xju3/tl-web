import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { PeripheralEntity } from '@/components/TableEntities/PeripheralEntity';
import type { Peripheral } from '@/services/Device/Peripheral/data';

export const PeripheralDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Peripheral>[] =>
  buildDescriptions(PeripheralEntity, intl);
