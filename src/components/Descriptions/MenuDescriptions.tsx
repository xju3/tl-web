import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { MenuEntity } from '@/components/TableEntities/MenuEntity';
import type { Menu } from '@/services/Sys/Menu/data';

export const MenuDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Menu>[] => buildDescriptions(MenuEntity, intl);
