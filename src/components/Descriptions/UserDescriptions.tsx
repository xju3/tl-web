import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { UserEntity } from '@/components/TableEntities/UserEntity';
import type { User } from '@/services/Sys/User/data';

export const UserDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<User>[] => buildDescriptions(UserEntity, intl);
