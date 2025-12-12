import EntitySelectorFormItem from '@/components/Common/FormItem/EntitySelectorFormItem';
import EmployeeSelector from '@/components/Selectors/EmployeeSelector';
import type { Employee } from '@/services/Org/Employee/data';
import type { User } from '@/services/Sys/User/data';
import type { EntityField } from '../types';

export const UserEntity: EntityField<User>[] = [
  {
    intlId: 'org.employee.code',
    dataIndex: 'employeeCode',
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
        <EntitySelectorFormItem<Employee>
          nameFieldName="employeeCode"
          labelIntl="org.employee.code"
          width={'lg'}
          SelectorModal={EmployeeSelector}
          onSelect={(entity, formInstance) => {
            formInstance.setFieldsValue({
              employeeId: entity.id,
              employeeCode: entity.code,
              employeeName: `${entity.fullName}`,
            });
          }}
        />
      ),
    },
  },
  {
    intlId: 'org.employee.name',
    dataIndex: 'employeeName',
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
    dataIndex: 'account',
    visibility: {
      inTable: true,
      inDescription: true,
      inForm: true,
    },
    form: {
      fieldType: 'text',
      rules: [{ type: 'required' }],
    },
  },
  {
    intlId: 'sys.user.password',
    dataIndex: 'password',
    valueType: 'text',
    sorter: {
      multiple: 1,
    },
    form: {
      fieldType: 'password',
      hidden: false,
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
      '0': 'common.disabled',
      '1': 'common.available',
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
    dataIndex: 'employeeId',
    visibility: {
      inForm: true,
    },
    form: {
      hidden: true,
    },
  },
];
