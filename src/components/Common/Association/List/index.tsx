import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ParamsType } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import React, { useRef } from 'react';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import CustomProTable from '@/components/Common/Table/CustomProTable';
import type { AssociationListProps } from './typing';

const AssociationList = <T extends { id: string }>({
  parentId,
  services,
  columns,
  addRoute,
  editRoutePattern,
  headerTitle,
  rowKey = 'id',
  toolBarRender,
  pagination = { pageSize: 10 },
  showIndexColumn,
}: AssociationListProps<T>) => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const defaultActionColumn: CustomProColumns<T> = {
    title: intl.formatMessage({ id: 'common.actions' }),
    key: 'action',
    valueType: 'option',
    width: '150px',
    render: (_, record) => {
      const actions = [];
      if (editRoutePattern) {
        actions.push(
          <a
            key="edit"
            onClick={() => {
              const path = editRoutePattern
                .replace(':parentId', parentId)
                .replace(':id', record.id);
              history.push(path);
            }}
          >
            {intl.formatMessage({ id: 'common.actions.edit' })}
          </a>,
        );
      }
      if (services.deleteItem) {
        actions.push(
          <Popconfirm
            key="delete"
            title={intl.formatMessage({ id: 'common.delete.confirm' })}
            onConfirm={async () => {
              await services.deleteItem!(parentId, record.id);
              actionRef.current?.reload();
            }}
          >
            <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
          </Popconfirm>,
        );
      }
      return actions;
    },
  };

  const tableColumns = [...columns, defaultActionColumn];

  const defaultToolBarRender = () => [
    <Button
      key="add"
      type="primary"
      onClick={() => {
        if (addRoute) {
          history.push(addRoute);
        }
      }}
    >
      <PlusOutlined />
      {intl.formatMessage({ id: 'common.actions.add' })}
    </Button>,
  ];

  return (
    <CustomProTable<T>
      headerTitle={headerTitle}
      actionRef={actionRef}
      rowKey={rowKey}
      search={false}
      toolBarRender={
        toolBarRender || (addRoute ? defaultToolBarRender : undefined)
      }
      request={async (params: ParamsType) => services.getPage(parentId, params)}
      columns={tableColumns}
      pagination={pagination}
      view={false}
      showIndexColumn={showIndexColumn}
    />
  );
};

export default AssociationList;
