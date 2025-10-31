import type { ProDescriptionsItemProps } from '@ant-design/pro-components';
import React from 'react';

export type ViewPageProps<T> = {
  title: string;
  description: string | ((data: T) => string);
  getById: (id: string) => Promise<T>;
  deleteById: (id: string) => Promise<any>;
  editUrl: string;
  listUrl: string;
  columns: ProDescriptionsItemProps<T>[];
  detailsComponent?: (data: T) => React.ReactNode;
  gutter?: number | 4;
};
