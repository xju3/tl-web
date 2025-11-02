import type {
  ActionType,
  ProColumns,
  ProTableProps,
} from '@ant-design/pro-components';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { IntlShape } from 'react-intl';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import CustomProTable from '@/components/Common/Table/CustomProTable';

export type SelectModalProps<T extends Record<string, any>> = {
  open: boolean;
  title: string;
  onCancel: () => void;
  onSelect: (record: T) => void;
  request: ProTableProps<T, any>['request'];
  columns: CustomProColumns<T>[];
  intl?: IntlShape;
  search?: ProTableProps<T, any>['search'];
  pagination?: ProTableProps<T, any>['pagination'];
  headerTitle?: string;
  rowKey?: string;
  showIndex?: boolean;
};

const SelectModal = <T extends Record<string, any>>({
  open,
  title,
  onCancel,
  onSelect,
  request,
  columns,
  search = {},
  pagination = { pageSize: 5 },
  headerTitle,
  rowKey = 'id',
  intl,
  showIndex = true,
}: SelectModalProps<T>) => {
  const actionRef = useRef<ActionType>(null);

  const actionColumn: ProColumns<T> = {
    title: intl ? intl.formatMessage({ id: 'common.actions' }) : '操作',
    dataIndex: 'option',
    valueType: 'option',
    width: 80,
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
      <CustomProTable<T>
        headerTitle={headerTitle}
        actionRef={actionRef}
        rowKey={rowKey}
        search={{ labelWidth: 'auto', ...search }}
        request={request}
        showIndexColumn={showIndex}
        columns={tableColumns}
        pagination={pagination}
        tableAlertRender={false}
      />
    </Modal>
  );
};

export default SelectModal;
