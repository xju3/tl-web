import type {
  ProDescriptionsItemProps,
  ProFormItemProps,
} from '@ant-design/pro-components';
import type { ProColumnType } from '@ant-design/pro-table';
import React from 'react';

export interface ValidationRule {
  type: 'required' | 'length' | 'ip';
  args?: any[];
  messageId?: string;
}

// A type that includes properties from column, description, and selector types
export type EntityField<T> = ProColumnType<T> &
  ProDescriptionsItemProps<T> & {
    intlId: string;
    inTable?: boolean;
    inDescription?: boolean;
    inSelector?: boolean;
    showColumnFilter?: boolean;
    enable?: boolean;
    inForm?: boolean;
    fieldType?:
      | 'text'
      | 'textarea'
      | 'digit'
      | 'password'
      | 'switch'
      | 'dependency'
      | 'custom';
    formItemProps?: ProFormItemProps;
    rules?: ValidationRule[];
    renderFormItem?: (item: any, config: any, form: any) => React.ReactNode;
  };
