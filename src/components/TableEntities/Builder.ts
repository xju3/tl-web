import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import type { EntityField } from './types';

export function buildTableColumns<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
): CustomProColumns<T>[] {
  return definitions
    .filter((def) => def.inTable)
    .map((def) => ({
      ...def,
      title: intl.formatMessage({ id: def.intlId }),
    }));
}

export function buildDescriptions<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
): ProDescriptionsItemProps<T>[] {
  return definitions
    .filter((def) => def.inDescription)
    .map((def) => ({
      ...def,
      title: intl.formatMessage({ id: def.intlId }),
    }));
}

export function buildSelectors<T>(
  definitions: EntityField<T>[],
  intl: IntlShape,
): CustomProColumns<T>[] {
  return definitions
    .filter((def) => def.inSelector)
    .map((def) => ({
      ...def,
      title: intl.formatMessage({ id: def.intlId }),
    }));
}
