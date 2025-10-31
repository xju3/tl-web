import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import { buildDescriptions } from '@/components/TableEntities/Builder';
import { EmployeeEntity } from '@/components/TableEntities/EmployeeEntity';
import type { Employee } from '@/services/Org/Employee/data';

export const EmployeeDescriptions = (
  intl: IntlShape,
): ProDescriptionsItemProps<Employee>[] =>
  buildDescriptions(EmployeeEntity, intl);
