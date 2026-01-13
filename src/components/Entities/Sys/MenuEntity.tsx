import { ProFormSelect } from '@ant-design/pro-components';
import { getApps } from '@/services/Sys/App/service';
import type { Menu } from '@/services/Sys/Menu/data';
import type { EntityField } from '../types';

export const MenuEntity: EntityField<Menu>[] = [
  {
    intlId: 'sys.menu.app',
    dataIndex: 'appId',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: false,
      inSelector: false,
      inForm: true,
    },
    form: {
      fieldType: 'custom',
      renderFormItem(item, config, intl) {
        return (
          <ProFormSelect
            request={async () => {
              const { data } = await getApps(
                { current: 1, pageSize: 10 },
                {},
                {},
              );
              return (
                data?.map((app) => ({
                  label: app.name,
                  value: app.id,
                })) || []
              );
            }}
            width="md"
            name="appId"
            label={intl.formatMessage({ id: 'sys.menu.app' })}
            rules={[{ required: true, message: '此项为必填项' }]}
          />
        );
      },
    },
  },

  {
    intlId: 'sys.menu.code',
    dataIndex: 'code',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.name',
    dataIndex: 'name',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inSelector: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'sys.menu.path',
    dataIndex: 'path',
    valueType: 'text',
    hideInSearch: true,
    sorter: {
      multiple: 3,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.component',
    dataIndex: 'component',
    valueType: 'text',
    hideInSearch: true,
    sorter: {
      multiple: 4,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.icon',
    dataIndex: 'icon',
    hideInSearch: true,
    valueType: 'text',
    sorter: {
      multiple: 5,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
    },
  },
  {
    intlId: 'sys.menu.app',
    dataIndex: 'appName',
    sorter: {
      multiple: 1,
    },
    visibility: {
      inTable: true,
      inSelector: true,
    },
  },
  // {
  //   intlId: 'sys.menu.type',
  //   dataIndex: 'type',
  //   valueType: 'text',
  //   sorter: {
  //     multiple: 6,
  //   },
  //   visibility: {
  //     inTable: true,
  //     inDescription: true,
  //     inForm: true,
  //   },
  //   form: {
  //     fieldType: 'text',
  //   },
  // },
  {
    intlId: 'sys.menu.visible',
    dataIndex: 'visible',
    hideInSearch: true,
    valueType: 'text',
    sorter: {
      multiple: 7,
    },
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'switch',
    },
  },
  // {
  //   intlId: 'sys.menu.permission',
  //   dataIndex: 'permission',
  //   valueType: 'text',
  //   sorter: {
  //     multiple: 8,
  //   },
  //   visibility: {
  //     inTable: true,
  //     inDescription: true,
  //     inForm: true,
  //   },
  //   form: {
  //     fieldType: 'custom',
  //     renderFormItem(item, config, intl) {
  //       return <ProFormSelect
  //         options={[
  //           {
  //             value: '1',
  //             label: '创建',
  //           },
  //           {
  //             value: '2',
  //             label: '更改',
  //           },
  //           {
  //             value: '3',
  //             label: '删除',
  //           },
  //           {
  //             value: '4',
  //             label: '视图',
  //           },
  //         ]}
  //         width="xs"
  //         name="permission"
  //         label={intl.formatMessage({ id: 'sys.menu.permission' })}
  //         rules={[{ required: true, message: '此项为必填项' }]}
  //       />
  //     }
  //   },
  // },
  {
    dataIndex: 'parentId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'id',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
