import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import type {
  ActionType,
  ParamsType,
  ProFormInstance,
} from '@ant-design/pro-components';
import { PageContainer } from '@ant-design/pro-components';
import type { ListToolBarProps } from '@ant-design/pro-table/es/components/ListToolBar';
import { history, useIntl } from '@umijs/max';
import { Button, Input, type InputRef, Popconfirm, Space } from 'antd';
import type { FilterDropdownProps, SortOrder } from 'antd/es/table/interface';
import type React from 'react';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import CustomProTable from '@/components/Common/Table/CustomProTable';
import type { CustomProColumns, ListPageProps } from './typing';

const CustomFilterDropdown = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  filterRef,
  visible, // ← 这里用 visible，不是 open
  dataIndex,
}: FilterDropdownProps & {
  open: boolean;
  dataIndex: string;
  filterRef: React.RefObject<any>;
}) => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (visible) {
      // 恢复保存的值
      const valueInRef = filterRef.current[dataIndex]?.[0];
      if (valueInRef !== undefined && selectedKeys?.[0] !== valueInRef) {
        setSelectedKeys([valueInRef]);
      }
      // 聚焦输入框
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [visible, dataIndex, selectedKeys, setSelectedKeys, filterRef]);

  const handleConfirm = () => {
    // 保存当前值到 filterRef
    if (!filterRef.current[dataIndex]) {
      filterRef.current[dataIndex] = [];
    }
    filterRef.current[dataIndex] = selectedKeys;

    // 触发确认
    confirm({ closeDropdown: true });
  };

  const handleClear = () => {
    if (clearFilters) {
      setSelectedKeys([]);
      // 清空 filterRef 中保存的值
      if (filterRef.current[dataIndex]) {
        filterRef.current[dataIndex] = [];
      }
      clearFilters();
      confirm({ closeDropdown: true });
    }
  };

  return (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={inputRef}
        placeholder="搜索..."
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={handleConfirm}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={handleConfirm}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          搜索
        </Button>
        <Button onClick={handleClear} size="small" style={{ width: 90 }}>
          重置
        </Button>
      </Space>
    </div>
  );
};

const ListPage = <T extends { id: string }>({
  services,
  columns,
  routes,
  sessionKey,
  showIndexColumn = true,
  extraActions,
  view = true,
}: ListPageProps<T>) => {
  const actionRef = useRef<ActionType>(undefined);
  const formRef = useRef<ProFormInstance>(undefined);
  const filterRef = useRef<Record<string, any>>({});
  const intl = useIntl();

  const getInitialState = () => {
    const savedState = sessionStorage.getItem(sessionKey);
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        sessionStorage.removeItem(sessionKey);
        return parsedState;
      } catch (e) {
        console.error('Failed to parse saved state', e);
      }
    }
    return {};
  };

  const initialValues = getInitialState();

  const saveStateAndNavigate = useCallback(
    (pathname: string) => {
      const state = {
        current: actionRef.current?.pageInfo?.current,
        pageSize: actionRef.current?.pageInfo?.pageSize,
        ...formRef.current?.getFieldsValue(),
      };
      sessionStorage.setItem(sessionKey, JSON.stringify(state));
      history.push(pathname);
    },
    [sessionKey],
  );

  const pageRequest = async (
    params: ParamsType,
    sorter: Record<string, SortOrder>,
    filter: Record<string, (string | number)[] | null>,
  ) => {
    filterRef.current = filter;
    const { current, pageSize, ...restParams } = params;
    const processedFilter: Record<string, any> = {};
    Object.keys(filter).forEach((key) => {
      const filterValue = filter[key];
      if (Array.isArray(filterValue) && filterValue.length > 0) {
        processedFilter[key] = filterValue[0];
      } else {
        processedFilter[key] = filterValue;
      }
    });

    const combinedFilter = { ...restParams, ...processedFilter };
    return services.getList(params, sorter, combinedFilter);
  };

  const toolbar: ListToolBarProps | false = {
    actions: [
      <Button
        key="add"
        type="primary"
        onClick={() => saveStateAndNavigate(routes.add)}
      >
        <PlusOutlined />
        {intl.formatMessage({ id: 'common.actions.add' })}
      </Button>,
    ],
  };

  const actionColumn = (
    saveStateAndNavigate: (path: string) => void,
  ): CustomProColumns<T> => ({
    title: intl.formatMessage({ id: 'common.actions' }),
    dataIndex: 'option',
    valueType: 'option',
    width: '140px',
    align: 'center',
    render: (_, record) => {
      const defaultActions = [
        <a
          key="edit"
          onClick={() => saveStateAndNavigate(`${routes.edit}/${record.id}`)}
        >
          {intl.formatMessage({ id: 'common.actions.edit' })}
        </a>,
        view && (
          <a
            key="view"
            onClick={() => saveStateAndNavigate(`${routes.view}/${record.id}`)}
          >
            {intl.formatMessage({ id: 'common.actions.view' })}
          </a>
        ),
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'common.delete.confirm' })}
          onConfirm={async () => {
            await services.deleteItem(record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.actions.delete' })}</a>
        </Popconfirm>,
      ];

      if (extraActions) {
        return [
          ...extraActions(saveStateAndNavigate, record, intl),
          ...defaultActions,
        ];
      }
      return defaultActions;
    },
  });

  const indexColumn = (): CustomProColumns<T> => ({
    title: intl.formatMessage({ id: 'common.index' }),
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 60,
    align: 'center',
    hideInSearch: true,
  });

  const tableColumns: CustomProColumns<T>[] = useMemo(() => {
    const processedColumns = columns(saveStateAndNavigate, intl).map(
      (col: CustomProColumns<T>) => {
        if (col.showColumnFilter) {
          return {
            ...col,
            filterIcon: (filtered: boolean) => (
              <SearchOutlined
                style={{ color: filtered ? '#1890ff' : undefined }}
              />
            ),
            onFilter: () => true,
            filterDropdown: (props: FilterDropdownProps) => (
              <CustomFilterDropdown
                {...props}
                open={props.visible ?? false}
                dataIndex={col.dataIndex as string}
                filterRef={filterRef}
              />
            ),
          };
        }
        return col;
      },
    );

    if (showIndexColumn) {
      return [
        indexColumn(),
        ...processedColumns,
        actionColumn(saveStateAndNavigate),
      ];
    }
    return [...processedColumns, actionColumn(saveStateAndNavigate)];
  }, [columns, saveStateAndNavigate, intl]);

  return (
    <PageContainer>
      <CustomProTable<T>
        actionRef={actionRef}
        formRef={formRef}
        showSorterTooltip={{
          title: intl.formatMessage({ id: 'common.sorter.tooltip' }),
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          initialValues: initialValues,
        }}
        toolbar={toolbar}
        request={pageRequest}
        columns={tableColumns}
        pagination={{
          defaultCurrent: (initialValues as any).current,
          defaultPageSize: (initialValues as any).pageSize,
          pageSize: 10,
        }}
      />
    </PageContainer>
  );
};

export default ListPage;
