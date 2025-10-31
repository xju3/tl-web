import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { DepartmentEntity } from '@/components/TableEntities/DepartmentEntity';
import type { Department } from '@/services/Org/Department/data';

export const DepartmentDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Department>[] =>
  buildDescriptions(DepartmentEntity, intl);
