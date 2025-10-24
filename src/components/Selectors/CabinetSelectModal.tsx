import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Modal } from 'antd';
import { useRef } from 'react';
import type { ProductItem } from '../../services/Device/Product/data';
import { getCabinets } from '../../services/Device/Product/service';

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

  const columns: ProColumns<ProductItem>[] = [
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

  return (
    <Modal
      title={intl.formatMessage({ id: 'device.product.item.select-device' })}
      width={800}
      open={open}
      onCancel={onCancel}
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
    >
      <ProTable<ProductItem>
        headerTitle={intl.formatMessage({ id: 'device.cabinet.list.title' })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        request={async (params) => {
          const { current, pageSize, ...rest } = params;
          const adjustedParams = {
            ...rest,
            currPage: current,
            pageSize: pageSize,
          };
          return getCabinets(adjustedParams);
        }}
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
