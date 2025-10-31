import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { RoleEntity } from '@/components/TableEntities/RoleEntity';
import type { Role } from '@/services/Sys/Role/data';

export const RoleDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Role>[] => buildDescriptions(RoleEntity, intl);
