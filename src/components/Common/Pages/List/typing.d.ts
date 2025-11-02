import type { ProColumns } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import React from 'react';

export type CustomProColumns<T> = ProColumns<T> & {
  showColumnFilter?: boolean;
  selector?: boolean;
};

export interface ListPageProps<T extends { id: string }> {
  services: {
    getList: (
      params: any,
      sorter: any,
      filter: any,
    ) => Promise<{ data: T[]; total: number; size: number; current: number }>;
    deleteItem: (id: string) => Promise<any>;
  };
  columns: (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ) => CustomProColumns<T>[];
  routes: {
    add: string;
    edit: string;
    view: string;
  };
  sessionKey: string;
  extraActions?: (
    saveStateAndNavigate: (path: string) => void,
    record: T,
    intl: any,
  ) => React.ReactNode[];
  showIndexColumn?: boolean;
  headerTitle?: string;
  toolBarRender?: boolean | (() => React.ReactNode[]);
  view?: boolean;
}

// 2. 扩展 ProTableProps
export interface CustomProTableProps<T extends Record<string, any>>
  extends ProTableProps<T, any> {
  /**
   * 是否显示序号列
   * @default false
   */
  view?: boolean;
  showIndexColumn?: boolean;
}
