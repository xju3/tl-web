import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { HostEntity } from '@/components/TableEntities/HostEntity';
import type { Host } from '@/services/Device/Host/data';

export const HostDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Host>[] => buildDescriptions(HostEntity, intl);
