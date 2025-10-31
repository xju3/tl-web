import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { CabinetEntity } from '@/components/TableEntities/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';

export const CabinetDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Cabinet>[] =>
  buildDescriptions(CabinetEntity, intl);
