import type { ParamsType, ProColumns } from '@ant-design/pro-components';
import type React from 'react';

export interface AssociationListProps<T extends { id: string }> {
  parentId: string;
  services: {
    getPage: (
      parentId: string,
      params: ParamsType,
    ) => Promise<{ data: T[]; total: number; size: number; current: number }>;
    deleteItem?: (parentId: string, id: string) => Promise<any>;
  };
  columns: ProColumns<T>[];
  addRoute?: string;
  editRoutePattern?: string; // e.g., /device/cabinets/:parentId/cables/:id/edit
  rowKey?: string;
  toolBarRender?: () => React.ReactNode[];
  pagination?: any;
  showIndexColumn?: boolean;
}
