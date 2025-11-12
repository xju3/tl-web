import type {
  ProDescriptionsItemProps,
  ProFormItemProps,
} from '@ant-design/pro-components';
import type { ProColumnType } from '@ant-design/pro-table';
import type { SorterResult } from 'antd/es/table/interface';
import React from 'react';

export interface ValidationRule {
  type: 'required' | 'length' | 'ip';
  args?: any[];
  messageId?: string;
}

export interface PageVisibility {
  inTable?: boolean;
  inDescription?: boolean;
  inSelector?: boolean;
  inForm?: boolean;
}

export interface FormFieldConfig {
  hidden?: boolean;
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
}

export interface ColumnConfig<T = any> {
  showColumnFilter?: boolean;
  align?: 'left' | 'right' | 'center';
  render?: (text: any, record: T, index: number) => React.ReactNode;
  sorter?:
    | boolean
    | ((a: T, b: T, sortOrder?: SorterResult<T>['order']) => number)
    | {
        compare?: (a: T, b: T, sortOrder?: SorterResult<T>['order']) => number;
        multiple?: number;
      };
}

// A type that includes properties from column, description, and selector types
export type EntityField<T> = ProColumnType<T> &
  ProDescriptionsItemProps<T> & {
    intlId?: string;
    visibility?: PageVisibility;
    form?: FormFieldConfig;
    column?: ColumnConfig<T>; // Renamed from tableColumnConfig
    valueEnum?: Record<string, string>;
    enable?: boolean;
  };
