import { useIntl } from '@umijs/max';
import type { CustomProColumns } from '@/components/Common/Pages/List/typing';
import SelectModal from '@/components/Common/SelectModal';
import { buildSelectors } from '@/components/Entities/Builder';
import { EmployeeEntity } from '@/components/Entities/Org/EmployeeEntity';
import type { Employee } from '@/services/Org/Employee/data';
import { getEmployees } from '@/services/Org/Employee/service';

export type EmployeeSelectorProps = {
  open: boolean;
  onCancel: () => void;
  onSelect: (product: Employee) => void;
};

const columns = (intl: any): CustomProColumns<Employee>[] =>
  buildSelectors(EmployeeEntity, intl);

const EmployeeSelector = ({
  open,
  onCancel,
  onSelect,
}: EmployeeSelectorProps) => {
  const intl = useIntl();
  const selectorColumns = columns(intl);

  return (
    <SelectModal<Employee>
      title={intl.formatMessage({ id: 'org.employee.list' })}
      open={open}
      onCancel={onCancel}
      onSelect={onSelect}
      request={getEmployees}
      columns={selectorColumns}
      intl={intl}
    />
  );
};

export default EmployeeSelector;
