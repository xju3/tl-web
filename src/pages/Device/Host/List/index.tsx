import { PlusOutlined } from '@ant-design/icons';
import type {
  ActionType,
  ProColumns,
  ProFormInstance,
} from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { history, useIntl } from '@umijs/max';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';
import type { Host } from '../data.d';
import { deleteHost, getHosts } from '../service';

const SESSION_KEY = 'hostListState';

const HostListPage = () => {
  const actionRef = useRef<ActionType>(null);
  const formRef = useRef<ProFormInstance>(null);
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
  const saveStateAndNavigate = (pathname: string) => {
    const state = {
      current: actionRef.current?.pageInfo?.current,
      pageSize: actionRef.current?.pageInfo?.pageSize,
      ...formRef.current?.getFieldsValue(),
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(state));
    history.push(pathname);
  };

  const columns: ProColumns<Host>[] = [
    {
      title: intl.formatMessage({ id: 'common.code' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'common.name' }),
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'common.ip' }),
      dataIndex: 'ip',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="edit"
          onClick={() =>
            saveStateAndNavigate(`/device/hosts/edit/${record.id}`)
          }
        >
          {intl.formatMessage({ id: 'common.edit' })}
        </a>,
        <a
          key="view"
          onClick={() =>
            saveStateAndNavigate(`/device/hosts/view/${record.id}`)
          }
        >
          {intl.formatMessage({ id: 'common.view' })}
        </a>,
        <Popconfirm
          key="delete"
          title={intl.formatMessage({ id: 'host.delete.confirm' })}
          onConfirm={async () => {
            await deleteHost(record.id);
            actionRef.current?.reload();
          }}
        >
          <a>{intl.formatMessage({ id: 'common.delete' })}</a>
        </Popconfirm>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<Host>
        headerTitle={intl.formatMessage({ id: 'host.list.title' })}
        actionRef={actionRef}
        formRef={formRef}
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
              history.push('/device/hosts/add');
            }}
          >
            <PlusOutlined /> {intl.formatMessage({ id: 'host.add' })}
          </Button>,
        ]}
        request={async (params, sorter) => {
          const { current, pageSize, ...rest } = params;
          return getHosts({ ...rest, currPage: current, pageSize, sorter });
        }}
        columns={columns}
        pagination={{
          defaultCurrent: (initialValues as any).current,
          defaultPageSize: (initialValues as any).pageSize,
        }}
      />
    </PageContainer>
  );
};

export default HostListPage;
