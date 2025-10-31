import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { PartnerEntity } from '@/components/TableEntities/PartnerEntity';
import type { Partner } from '@/services/Org/Partner/data';

export const PartnerDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Partner>[] =>
  buildDescriptions(PartnerEntity, intl);
