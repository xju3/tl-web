import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import type { ProColumnType } from '@ant-design/pro-table';

// A type that includes properties from column, description, and selector types
export type EntityField<T> = ProColumnType<T> &
  ProDescriptionsItemProps<T> & {
    intlId: string;
    inTable?: boolean;
    inDescription?: boolean;
    inSelector?: boolean;
    showColumnFilter?: boolean;
    enable?: boolean;
  };
