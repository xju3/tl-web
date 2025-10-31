import type {
  ActionType,
  ParamsType,
  ProColumns,
} from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Modal } from 'antd';
import type { SortOrder } from 'antd/es/table/interface';
import { useCallback, useRef } from 'react';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import { getCabinets } from '@/services/Device/Cabinet/service';

export type CabinetSelectModalProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (cabinet: any) => void;
};

const CabinetSelectModal = ({
  open,
  onCancel,
  onSelect,
}: CabinetSelectModalProps) => {
  const actionRef = useRef<ActionType>(null);
  const intl = useIntl();

  const columns: ProColumns<Cabinet>[] = [
    {
      title: intl.formatMessage({ id: 'device.product.item.deviceCode' }),
      dataIndex: 'code',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'device.product.item.deviceName' }),
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: intl.formatMessage({ id: 'common.actions' }),
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="select"
          onClick={() => {
            onSelect(record);
          }}
        >
          {intl.formatMessage({ id: 'common.actions.select' })}
        </a>,
      ],
    },
  ];

  const cabinetRequest = useCallback(
    async (params: ParamsType, sort: Record<string, SortOrder>) => {
      const { current, pageSize, ...rest } = params;

      // Prefer external sorter captured from onChange (supports multi-sort array)
      const effectiveSort = externalSortRef.current ?? sort;

      // Correctly handle multi-field sorting
      if (effectiveSort && Object.keys(effectiveSort).length > 0) {
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
        const sortedKeys = Object.keys(effectiveSort).sort((a, b) => {
          const priorityA = sorterPriorityMap.get(a) || 999;
          const priorityB = sorterPriorityMap.get(b) || 999;
          return priorityA - priorityB;
        });

        const orderedSorter: Record<string, 'ascend' | 'descend'> = {};
        for (const key of sortedKeys) {
          if (effectiveSort[key]) {
            orderedSorter[key] = effectiveSort[key] as 'ascend' | 'descend';
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
        sorter: effectiveSort,
      });
    },
    [columns],
  );

  const externalSortRef = useRef<Record<string, SortOrder> | null>(null);
  return (
    <Modal
      title={intl.formatMessage({ id: 'device.product.item.select-device' })}
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      maskClosable={false}
    >
      <ProTable<Cabinet>
        headerTitle={intl.formatMessage({ id: 'device.cabinet.list.title' })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={cabinetRequest}
        columns={columns}
        pagination={{
          pageSize: 5,
        }}
        tableAlertRender={false}
      />
    </Modal>
  );
};

export default CabinetSelectModal;
