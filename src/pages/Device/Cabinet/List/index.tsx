import { BuildOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import ListPage from '@/components/Common/Pages/List';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import { buildTableColumns } from '@/components/Entities/Builder';
import { CabinetEntity } from '@/components/Entities/Device/CabinetEntity';
import type { Cabinet } from '@/services/Device/Cabinet/data';
import {
  buildInstructions,
  deleteCabinet,
  getCabinets,
} from '@/services/Device/Cabinet/service';

const SESSION_KEY = 'cabinetListState';

const CabinetListPage = () => {
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const services = {
    getList: getCabinets,
    deleteItem: deleteCabinet,
  };

  const routes = {
    add: '/device/cabinets/add',
    edit: '/device/cabinets/edit',
    view: '/device/cabinets/view',
  };

  const extraColumnActions = (
    saveStateAndNavigate: (path: string) => void,
    record: Cabinet,
    intl: any,
  ) => [
    <a
      key="create"
      onClick={() =>
        saveStateAndNavigate(`/device/cabinets/${record.id}/children/add`)
      }
    >
      {intl.formatMessage({ id: 'common.actions.add' })}
    </a>,
  ];

  const extraHeaderActions = (intl: any) => [
    <Button
      key="build-instructions"
      type="primary"
      disabled={selectedKeys.length === 0}
      onClick={() => buildInstructions(selectedKeys[0] as string)}
    >
      <BuildOutlined />
      {intl.formatMessage({ id: 'cabinet.build.instructions' })}
    </Button>,
  ];

  const columns = (
    saveStateAndNavigate: (path: string, id?: string) => void,
    intl: any,
  ): CustomProColumns<Cabinet>[] => buildTableColumns(CabinetEntity, intl);

  return (
    <ListPage<Cabinet>
      services={services}
      columns={columns}
      showIndexColumn={false}
      routes={routes}
      sessionKey={SESSION_KEY}
      customerRowSelection={{
        type: 'radio',
        onChange: (selectedRowKeys: React.Key[], selectedRows: Cabinet[]) => {
          setSelectedKeys(selectedRowKeys);
          console.log('选中的顶层数据:', selectedRows[0]);
        },
        getCheckboxProps: (record: any) => {
          const isTopLevel = !record.parentId; // 根据你的业务逻辑判断
          return {
            disabled: !isTopLevel,
            style: {
              display: isTopLevel ? 'inline-block' : 'none',
            },
          };
        },
      }}
      columnExtraActions={extraColumnActions}
      headerExtraActions={extraHeaderActions}
    />
  );
};

export default CabinetListPage;
