import type {
  ActionType,
  ProColumns,
  ProTableProps,
} from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { IntlShape } from 'react-intl';

export type SelectModalProps<T extends Record<string, any>> = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onSelect: (record: T) => void;
  request: ProTableProps<T, any>['request'];
  columns: ProColumns<T>[];
  intl?: IntlShape;
  search?: ProTableProps<T, any>['search'];
  pagination?: ProTableProps<T, any>['pagination'];
  headerTitle?: string;
  rowKey?: string;
};

const SelectModal = <T extends Record<string, any>>({
  open,
  title,
  onCancel,
  onSelect,
  request,
  columns,
  search = { labelWidth: 120 },
  pagination = { pageSize: 5 },
  headerTitle,
  rowKey = 'id',
  intl,
}: SelectModalProps<T>) => {
  const actionRef = useRef<ActionType>(null);

  const actionColumn: ProColumns<T> = {
    title: intl ? intl.formatMessage({ id: 'common.actions' }) : '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => [
      <a
        key="select"
        onClick={() => {
          onSelect(record);
        }}
      >
        {intl ? intl.formatMessage({ id: 'common.actions.select' }) : '选择'}
      </a>,
    ],
  };

  const tableColumns = [...columns, actionColumn];

  return (
    <Modal
      title={title}
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      maskClosable={false}
    >
      <ProTable<T>
        headerTitle={headerTitle}
        actionRef={actionRef}
        rowKey={rowKey}
        search={search}
        request={request}
        columns={tableColumns}
        pagination={pagination}
        tableAlertRender={false}
      />
    </Modal>
  );
};

export default SelectModal;
