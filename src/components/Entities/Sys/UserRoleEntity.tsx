import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import RoleSelector from '@/components/Selectors/RoleSelector';
import type { Role } from '@/services/Sys/Role/data';
import type { UserRole } from '@/services/Sys/User/data';
import type { EntityField } from '../types';

export const UserRoleEntity: EntityField<UserRole>[] = [
  {
    intlId: 'sys.role.code',
    dataIndex: 'roleCode',
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      formItemProps: {
        disabled: true,
      },
      fieldType: 'custom',
      renderFormItem: () => (
        <EntitySelectorFormItem<Role>
          nameFieldName="roleCode"
          labelIntl="sys.role.code"
          width={'lg'}
          SelectorModal={RoleSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              roleId: entity.id,
              roleCode: entity.code,
              roleName: `${entity.name}`,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'sys.role.name',
    dataIndex: 'roleName',
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      formItemProps: {
        disabled: true,
      },
    },
  },
  {
    intlId: 'sys.user.account',
    dataIndex: 'userAccount',
    visibility: {
      inTable: true,
      inDescription: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'sys.user.status',
    dataIndex: 'status',
    valueType: 'text',
    sorter: {
      multiple: 2,
    },
    visibility: {
      inTable: true,
      inSelector: true,
      inForm: true,
    },
    valueEnum: {
      '0': 'Disabled',
      '1': 'Available',
    },
    form: {
      fieldType: 'digit',
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
  {
    dataIndex: 'roleId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
  {
    dataIndex: 'userId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
