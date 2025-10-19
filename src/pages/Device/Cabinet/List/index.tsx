import { PlusOutlined } from '@ant-design/icons';
import type {
  ActionType,
  ParamsType,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import { useCallback, useMemo, useRef } from 'react';
import type { Cabinet } from '../data.d';
import { deleteCabinet, getCabinets } from '../service';

const SESSION_KEY = 'cabinetListState';

const CabinetListPage = () => {
  const actionRef = useRef<ActionType>(undefined);
  const formRef = useRef<ProFormInstance>(undefined);
  const intl = useIntl();

  // Read state from sessionStorage on initial render
  const getInitialState = () => {
    const savedState = sessionStorage.getItem(SESSION_KEY);
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        sessionStorage.removeItem(SESSION_KEY);
        return parsedState;
      } catch (e) {
        console.error('Failed to parse saved state', e);
      }
    }
    return {}; // Return empty object if no state
  };

  const initialValues = getInitialState();

  // Function to save state before navigating away
  const saveStateAndNavigate = useCallback((pathname: string) => {
    const state = {
      current: actionRef.current?.pageInfo?.current,
      pageSize: actionRef.current?.pageInfo?.pageSize,
      ...formRef.current?.getFieldsValue(),
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
    history.push(pathname);
  }, []);

  const columns: ProColumns<Cabinet>[] = useMemo(
    () => [
      {
        title: intl.formatMessage({ id: 'common.code' }),
        dataIndex: 'code',
        key: 'code',
        sorter: true,
      },
      {
        title: intl.formatMessage({ id: 'common.name' }),
        dataIndex: 'name',
        key: 'name',
        sorter: true,
      },
      {
        title: intl.formatMessage({ id: 'common.actions' }),
        dataIndex: 'option',
        valueType: 'option',
        width: '150px',
        render: (_, record) => [
          <a
            key="create"
            onClick={() =>
              saveStateAndNavigate(`/device/cabinets/add-child/${record.id}`)
            }
          >
            {intl.formatMessage({ id: 'common.create' })}
          </a>,
          <a
            key="edit"
            onClick={() =>
              saveStateAndNavigate(`/device/cabinets/edit/${record.id}`)
            }
          >
            {intl.formatMessage({ id: 'common.edit' })}
          </a>,
          <a
            key="view"
            onClick={() =>
              saveStateAndNavigate(`/device/cabinets/view/${record.id}`)
            }
          >
            {intl.formatMessage({ id: 'common.view' })}
          </a>,
          <Popconfirm
            key="delete"
            title={intl.formatMessage({ id: 'cabinet.delete.confirm' })}
            onConfirm={async () => {
              await deleteCabinet(record.id);
              actionRef.current?.reload();
            }}
          >
            <a>{intl.formatMessage({ id: 'common.delete' })}</a>
          </Popconfirm>,
        ],
      },
    ],
    [intl, saveStateAndNavigate],
  );

  return (
    <PageContainer>
      <ProTable<Cabinet>
        headerTitle={intl.formatMessage({ id: 'cabinet.list.title' })}
        actionRef={actionRef}
        formRef={formRef}
        showSorterTooltip={{
          title: intl.formatMessage({ id: 'common.sorter.tooltip' }),
        }}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        form={{
          initialValues: initialValues,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push('/device/cabinets/add');
            }}
          >
            <PlusOutlined /> {intl.formatMessage({ id: 'cabinet.add' })}
          </Button>,
        ]}
        request={useCallback(
          async (params: ParamsType, sort: Record<string, SortOrder>) => {
            const { current, pageSize, ...rest } = params;

            // Correctly handle multi-field sorting
            if (sort && Object.keys(sort).length > 0) {
              const sorterPriorityMap = new Map<string, number>();
              columns.forEach((col) => {
                if (
                  col.dataIndex &&
                  col.sorter &&
                  typeof col.sorter === 'object' &&
                  col.sorter.multiple
                ) {
                  sorterPriorityMap.set(
                    col.dataIndex.toString(),
                    col.sorter.multiple,
                  );
                }
              });

              const sortedKeys = Object.keys(sort).sort((a, b) => {
                const priorityA = sorterPriorityMap.get(a) || 999;
                const priorityB = sorterPriorityMap.get(b) || 999;
                return priorityA - priorityB;
              });

              const orderedSorter: Record<string, 'ascend' | 'descend'> = {};
              for (const key of sortedKeys) {
                if (sort[key]) {
                  orderedSorter[key] = sort[key] as 'ascend' | 'descend';
                }
              }
              return getCabinets({
                ...rest,
                currPage: current || 1,
                pageSize: pageSize || 10,
                nullParentId: true,
                sorter: orderedSorter,
              });
            }

            return getCabinets({
              ...rest,
              currPage: current || 1,
              pageSize: pageSize || 10,
              nullParentId: true,
              sorter: sort,
            });
          },
          [columns],
        )}
        columns={columns}
        pagination={{
          defaultCurrent: (initialValues as any).current,
          defaultPageSize: (initialValues as any).pageSize,
          pageSize: 10,
        }}
      />
    </PageContainer>
  );
};

export default CabinetListPage;
